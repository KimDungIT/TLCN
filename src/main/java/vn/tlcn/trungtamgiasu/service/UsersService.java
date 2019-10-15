package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Users.UsersDto;
import vn.tlcn.trungtamgiasu.dto.mapper.UsersMapper;
import vn.tlcn.trungtamgiasu.exception.UserNotCreateException;
import vn.tlcn.trungtamgiasu.model.Roles;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.UsersRepository;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

@Service
public class UsersService implements UserDetailsService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private UsersMapper usersMapper;

    /**
     * Get by phone
     *
     * @param phone String
     * @return user or exception
     */
    public Users getByPhone(String phone) {
        logger.info("Get user by phone " + phone);
        return usersRepository.findByPhone(phone).orElseThrow(
                () -> new RuntimeException("User can not found by phone " + phone)

        );
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Users user = getByPhone(s);
        return new org.springframework.security.core.userdetails.User(user.getPhone(), user.getPassword(),
                AuthorityUtils.createAuthorityList("USER"));
    }

    @Bean
    public PasswordEncoder passwordEncoderUser() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Save user
     *
     * @param users
     * @return user
     */
    public Users saveUser(Users users) {
        logger.info("Save user service");
        return usersRepository.save(users);
    }

    public Users signUp(String type, UsersDto usersDto) {
        logger.info("sign up service");
        if (type == "") {
            throw new UserNotCreateException("Not choose type");
        }

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<UsersDto>> violations = validator.validate(usersDto);
        StringBuilder msg = new StringBuilder();

        for (ConstraintViolation<UsersDto> c : violations) {
            msg.append(c.getPropertyPath() + " " + c.getMessage() + " ");
        }
        if (!violations.isEmpty()) {
            throw new UserNotCreateException(msg.toString());
        }
        if (usersRepository.findByPhone(usersDto.getPhone()).isPresent())
            throw new UserNotCreateException("Phone has already exist");

        usersDto.setPassword(passwordEncoderUser().encode(usersDto.getPassword()));
        Users users = saveUser(usersMapper.toUsers(usersDto));
        //insert data to table user_role
        Roles roles = rolesService.getRoleByRoleName(type);
        users.getRoles().add(roles);

        return saveUser(users);
    }


}
