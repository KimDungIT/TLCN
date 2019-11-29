package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;
import java.util.Optional;


@Repository
public interface ClassesRepository extends JpaRepository<Classes, Integer> {

    List<Classes> findTop6By();

    List<Classes> findAllByStatus(String status);

    Optional<Classes> findByIdClass(int idClass);

    @Query(value = "select * from classes c where c.class_teach like ?1 and c.address like ?2", nativeQuery = true)
    List<Classes> getListClassByClassTeach(String classTeach, String address);

    @Query(value = "select * from classes where id_parent ='8'", nativeQuery = true)
    List<Classes> getListClassByUser(int idUser);


}
