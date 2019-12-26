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

    @Query(value = "select * from class_register where id_class = ?1", nativeQuery = true)
    List<ClassRegister> getAllByClasses(int id);

    Optional<ClassRegister> findByIdClassRegister(int id);

    @Query(value = "select  * from class_register where id_tutor = ?1", nativeQuery = true)
    List<ClassRegister> getAllByTutors(int idTutor);

    @Modifying
    @Transactional
    @Query(value = "update class_register set status = ?1 where id_class_register = ?2", nativeQuery = true)
    void changeStatusClassRegister(String status, int id);

}
