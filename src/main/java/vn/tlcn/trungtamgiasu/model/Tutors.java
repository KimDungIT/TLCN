package vn.tlcn.trungtamgiasu.model;

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
@Table(name = "tutors", schema = "db_giasu")
public class Tutors implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTutor;

    @Column(length = 11, nullable = false)
    private String gender;

    @Column(length = 11, nullable = false)
    private String yearOfBirth;

    private String image;

    @Column(nullable = false)
    private String major;

    @Column(nullable = false)
    private String college;

    @Column(length = 11, nullable = false)
    private String graduationYear;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String subjects;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String classes;

    @Column(nullable = false)
    private String districtCanTeach;

    @Lob
    private String moreInfo;

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

    @ManyToMany(mappedBy = "tutors")
    private Set<Classes> list_class = new HashSet<>();

    @OneToMany(mappedBy = "tutors", cascade = CascadeType.ALL)
    private Set<Invoice> invoices = new HashSet<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user")
    private Users users;

}
