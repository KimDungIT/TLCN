package vn.tlcn.trungtamgiasu.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
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
@Table(name = "users", schema = "db_giasu")
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(nullable = false)
    private String name;

    @Column(length = 11, nullable = false, unique = true)
    private String phone;

    @Column(nullable = false)
    private String address;

    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @CreatedDate
    private Instant dateCreated;

    @LastModifiedDate
    private Instant lastUpdate;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JsonIgnore
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "id_user", referencedColumnName = "idUser"),
            inverseJoinColumns = @JoinColumn(name = "id_role", referencedColumnName = "idRole"))
    private Set<Roles> roles = new HashSet<>();

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private Set<Classes> classes = new HashSet<>();

    @OneToOne(mappedBy = "users", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
//    @JsonIgnore
    private Tutors tutors;
}
