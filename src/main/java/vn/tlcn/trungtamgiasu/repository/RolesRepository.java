package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.tlcn.trungtamgiasu.model.Roles;

import java.util.List;
import java.util.Optional;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Integer> {
    Optional<Roles> findByRoleName(String role_name);

    @Query(value = "select distinct user_role.id_role from user_role where id_user = ?1", nativeQuery = true)
    List<Integer> getByIdUser(int id);

    Optional<Roles> findByIdRole(int id);
}
