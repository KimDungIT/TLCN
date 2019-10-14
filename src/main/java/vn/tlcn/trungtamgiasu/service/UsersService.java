package vn.tlcn.trungtamgiasu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.UsersRepository;

import java.util.Optional;

@Service
public class UsersService implements UserDetailsService{

    @Autowired
    private UsersRepository usersRepository;

    public Users getByPhone(String phone) {
        return usersRepository.findByPhone(phone).orElseThrow(
                () -> new RuntimeException("Phone can not found")

        );
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<Users> userOptional = usersRepository.findByPhone(s);

        userOptional.orElseThrow(() -> new UsernameNotFoundException("Not found user with phone = " + s));

        Users user = userOptional.get();

        return new org.springframework.security.core.userdetails.User(user.getPhone(), user.getPassword(),
                AuthorityUtils.createAuthorityList("USER"));
    }
}
