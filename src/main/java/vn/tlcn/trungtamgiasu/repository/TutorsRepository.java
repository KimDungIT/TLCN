package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.model.Users;

import java.util.List;
import java.util.Optional;

@Repository
public interface TutorsRepository extends JpaRepository<Tutors, Integer> {
   List<Tutors> findAll();
   Optional<Tutors> findByUsers(Users users);
   Optional<Tutors> findByIdTutor(int idTutor);
}
