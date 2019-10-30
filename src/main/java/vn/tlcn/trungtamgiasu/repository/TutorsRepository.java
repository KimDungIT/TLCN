package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.Tutors;

@Repository
public interface TutorsRepository extends JpaRepository<Tutors, Integer> {
}
