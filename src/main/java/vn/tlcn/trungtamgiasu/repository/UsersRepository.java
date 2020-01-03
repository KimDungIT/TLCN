package vn.tlcn.trungtamgiasu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import vn.tlcn.trungtamgiasu.model.Roles;
import vn.tlcn.trungtamgiasu.model.Users;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    Optional<Users> findByPhone(String phone);

    Optional<Users> findByIdUser(int idUser);

    @Modifying
    @Transactional
    @Query("update Users as u set u.password = ?1 where u.idUser = ?2")
    void changePassword(String password, int id);

    List<Users> findAllByRoles(Roles roles);

}
