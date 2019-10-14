package vn.tlcn.trungtamgiasu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "classes", schema = "db_giasu")
public class Classes implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_class;

    @Column(nullable = false)
    private String grade;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String time_teach;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private double salary;

    @Column(nullable = false)
    private double service_fee;

    private String gender_requirement;

    private String level_requirement;

    @Column(nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "id_parent", nullable = false)
    @JsonIgnore
    private Users users;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "class_tutor", joinColumns = @JoinColumn(name = "id_class", referencedColumnName = "id_class"),
            inverseJoinColumns = @JoinColumn(name = "id_tutor", referencedColumnName = "id_tutor"))
    private Set<Tutors> tutors;

    @OneToMany(mappedBy = "classes", cascade = CascadeType.ALL)
    private Set<Invoice> invoices = new HashSet<>();


}
