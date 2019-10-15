package vn.tlcn.trungtamgiasu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "invoice", schema = "db_giasu")
public class Invoice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idInvoice;

    private double serviceFee;

    @CreatedDate
    private Date time;

    @ManyToOne
    @JoinColumn(name = "id_class", nullable = false)
    @JsonIgnore
    private Classes classes;

    @ManyToOne
    @JoinColumn(name = "id_tutor", nullable = false)
    @JsonIgnore
    private Tutors tutors;
    
}
