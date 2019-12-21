package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClassRegisterRepository extends JpaRepository<ClassRegister, Integer> {

    List<ClassRegister> findAllByClasses(Classes classes);

    Optional<ClassRegister> findByIdClassRegister(int id);

    @Query(value = "select  * from class_register where id_tutor = ?1 and status !='Đã huỷ'", nativeQuery = true)
    List<ClassRegister> getAllByTutors(int idTutor);

    @Query(value = "select t.image, u.name, t.level, c.payments, c.status\n" +
            "from class_register c join tutors t on c.id_tutor = t.id_tutor join users u on t.id_user = u.id_user\n" +
            "where c.id_class=?1", nativeQuery = true)
    List<String> getAllInfo(int idClass);

    @Modifying
    @Transactional
    @Query(value = "update class_register set status = ?1 where id_class_register = ?2", nativeQuery = true)
    void changeStatusClassRegister(String status, int id);

    List<ClassRegister> getAllByClassesAndStatus(Classes classes,String status);

}