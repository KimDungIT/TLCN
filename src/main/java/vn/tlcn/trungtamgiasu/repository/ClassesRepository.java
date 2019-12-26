package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;
import java.util.Optional;


@Repository
public interface ClassesRepository extends JpaRepository<Classes, Integer>, JpaSpecificationExecutor<Classes> {

    List<Classes> findTop6ByStatus(String status);

    //List<Classes> findAllByStatus(String status);
    Page<Classes> findAllByStatus(String status, Pageable pageable);

    Optional<Classes> findByIdClass(int idClass);
    List<Classes> findByClassTeachContainingOrDistrictContaining(String a, String b);

    @Query(value = "select * from classes c where c.class_teach like ?1 or c.district like ?2", nativeQuery = true)
    List<Classes> getListClassesTutorCanTeach(String classTeach, String address);

    @Query(value = "select * from classes where id_parent = ?1", nativeQuery = true)
    List<Classes> getListClassByUser(int idUser);

    Page<Classes> findAllByClassTeach(String classTeach, Pageable pageable);
    List<Classes> findAllByClassTeachAndDistrict(String classTeach, String district);

    List<Classes> findAllBySubject(String subject);

    List<Classes> findAllByDistrictEquals(String district);

    @Query(value = "select * from classes where class_teach = ?1 limit 3", nativeQuery = true)
    List<Classes> getListClassRelate(String classTeach);

    @Query(value = "select * from classes order by salary desc limit 6", nativeQuery = true)
    List<Classes> getListClassesTop();

    @Modifying
    @Transactional
    @Query("update Classes as u set u.status = ?1 where u.idClass = ?2")
    void changeStatus(String status, int id);

}
