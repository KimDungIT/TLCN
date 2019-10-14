package vn.tlcn.trungtamgiasu.model;

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
@Table(name = "tutors", schema = "db_giasu")
public class Tutors implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_tutor;

    @Column(length = 11, nullable = false)
    private String gender;

    @Column(length = 11, nullable = false)
    private String year_of_birth;

    private String image;

    @Column(nullable = false)
    private String major;

    @Column(nullable = false)
    private String college;

    @Column(length = 11, nullable = false)
    private String graduation_year;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String subjects;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String classes;

    @Column(nullable = false)
    private String district_can_teach;

    @Lob
    private String more_info;

    @Column(nullable = false)
    private String status;

    @ManyToMany(mappedBy = "tutors")
    private Set<Classes> list_class = new HashSet<>();

    @OneToMany(mappedBy = "tutors", cascade = CascadeType.ALL)
    private Set<Invoice> invoices = new HashSet<>();


}
