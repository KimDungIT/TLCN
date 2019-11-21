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
import java.time.Instant;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "class_register", schema = "db_giasu")
public class ClassRegister{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idClassRegister;

    @ManyToOne
//    @JsonIgnore
    @JoinColumn(name = "id_class")
    Classes classes;

    @ManyToOne
//    @JsonIgnore
    @JoinColumn(name = "id_tutor")
    Tutors tutors;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private Date dateReceive;

    @Column(nullable = false)
    private String payments;

    @Lob
    private String moreRequire;

    @CreatedDate
    private Instant dateCreated;

    @LastModifiedDate
    private Instant lastUpdate;

    @CreatedBy
    private String createdBy;

    @LastModifiedBy
    private String updatedBy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_invoice")
    @JsonIgnore
    private Invoice invoice;
}
