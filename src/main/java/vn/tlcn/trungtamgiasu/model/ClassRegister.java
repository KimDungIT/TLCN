package vn.tlcn.trungtamgiasu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "class_register", schema = "db_giasu")
//@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class ClassRegister  implements Serializable{
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

    @OneToOne(mappedBy = "classRegister")
    //@JsonIgnore
    private Invoice invoice;

}