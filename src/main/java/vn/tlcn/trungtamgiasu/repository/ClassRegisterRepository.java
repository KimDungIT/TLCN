package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;

import java.util.List;

@Repository
public interface ClassRegisterRepository extends JpaRepository<ClassRegister, Integer> {

    List<ClassRegister> findAllByClasses(Classes classes);

    List<ClassRegister> findAllByTutors(Tutors tutors);

    @Query(value = "select t.image, u.name, t.level, c.payments, c.status\n" +
            "from class_register c join tutors t on c.id_tutor = t.id_tutor join users u on t.id_user = u.id_user\n" +
            "where c.id_class=?1", nativeQuery = true)
    List getAllInfo(int idClass);

}
