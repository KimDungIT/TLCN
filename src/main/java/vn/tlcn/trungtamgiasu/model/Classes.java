package vn.tlcn.trungtamgiasu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "classes", schema = "db_giasu")
public class Classes implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idClass;

    @Column(nullable = false)
    private String grade;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String timeTeach;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private double salary;

    @Column(nullable = false)
    private double serviceFee;

    private String genderRequirement;

    private String levelRequirement;

    @Column(nullable = false)
    private String status;

    @CreatedDate
    private Instant dateCreated;

    @LastModifiedDate
    private Instant lastUpdate;

    @CreatedBy
    private String createdBy;

    @LastModifiedBy
    private String updatedBy;

    @ManyToOne
    @JoinColumn(name = "id_parent")
    @JsonIgnore
    private Users users;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "class_tutor", joinColumns = @JoinColumn(name = "id_class", referencedColumnName = "idClass"),
            inverseJoinColumns = @JoinColumn(name = "id_tutor", referencedColumnName = "idTutor"))
    private Set<Tutors> tutors;

    @OneToMany(mappedBy = "classes", cascade = CascadeType.ALL)
    private Set<Invoice> invoices = new HashSet<>();


}
