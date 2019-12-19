package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;
import java.util.Optional;


@Repository
public interface ClassesRepository extends JpaRepository<Classes, Integer> {

    List<Classes> findTop6By();

    List<Classes> findAllByStatus(String status);

    Optional<Classes> findByIdClass(int idClass);

}
