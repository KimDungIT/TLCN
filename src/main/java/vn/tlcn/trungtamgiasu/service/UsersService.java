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
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Users.ChangeInfoUserDto;
import vn.tlcn.trungtamgiasu.dto.Users.ChangePasswordDto;
import vn.tlcn.trungtamgiasu.dto.Users.UsersDto;
import vn.tlcn.trungtamgiasu.dto.mapper.UsersMapper;
import vn.tlcn.trungtamgiasu.exception.NotChangePasswordException;
import vn.tlcn.trungtamgiasu.exception.UserNotChangeException;
import vn.tlcn.trungtamgiasu.exception.UserNotCreateException;
import vn.tlcn.trungtamgiasu.exception.UserNotFoundException;
import vn.tlcn.trungtamgiasu.model.Roles;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.UsersRepository;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.List;
import java.util.Set;

@Service
public class UsersService implements UserDetailsService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RolesService rolesService;

    @Autowired
    private TutorsService tutorsService;

    @Autowired
    private ClassRegisterService classRegisterService;

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

    public Users getById(int idUser)
    {
        logger.info("Get by id user "+idUser);
        return usersRepository.findByIdUser(idUser).orElseThrow(() -> new UserNotFoundException("User not found by id "+ idUser));
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Users user = getByPhone(s);
        Set<String> roles =  rolesService.findByUser(user.getIdUser());

        return new org.springframework.security.core.userdetails.User(user.getPhone(), user.getPassword(),
                AuthorityUtils.createAuthorityList(roles.toString()));
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

    /**
     * Sign up
     * @param type String: Type account
     * @param usersDto
     * @return user
     */
    public Users signUp(String type, UsersDto usersDto) {
        logger.info("sign up service");
        if (type == "") {
            throw new UserNotCreateException("Not choose type");
        }

        //validate
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
        users = saveUser(users);
        return users;
    }

    /**
     * changePassword
     * @param changePasswordDto
     * @param idUser
     * @param auth
     * @return user
     */
    public Users changePassword(ChangePasswordDto changePasswordDto, int idUser, OAuth2Authentication auth)
    {
        Users userById = getById(idUser);

        if (passwordEncoderUser().matches(changePasswordDto.getOldPassword(), userById.getPassword())
                && userById.getPhone().equals(auth.getName())) {
            logger.info("Change password "+ idUser);
            usersRepository.changePassword(passwordEncoderUser().encode(changePasswordDto.getNewPassword()), idUser);
            
        } else {
            throw new NotChangePasswordException("Can't change password");
        }

        return userById;
    }

    /**
     * Change information user
     * @param changeInfoUserDto
     * @return user
     */
    public Users changeInfoUser(ChangeInfoUserDto changeInfoUserDto, OAuth2Authentication auth)
    {
        logger.info("Change information user");
        Users users = getByPhone(auth.getName());
        users.setAddress(changeInfoUserDto.getAddress());
        users.setEmail(changeInfoUserDto.getEmail());
        users.setName(changeInfoUserDto.getName());
        if(!changeInfoUserDto.getPhone().equals(users.getPhone()))
        {
            if(usersRepository.findByPhone(changeInfoUserDto.getPhone()).isPresent())
            {
                throw new UserNotChangeException("Can not change info user");
            }else {
                users.setPhone(changeInfoUserDto.getPhone());
            }
        }
        return saveUser(users);
    }

    //?
    public Users getUserByIdTutor(String idTutor)
    {
        logger.info("Get user by idTutor: "+ idTutor);
        Users users = getByPhone(idTutor);
        return users;
    }

    public Users createParent(UsersDto usersDto){
        usersDto.setPassword(passwordEncoderUser().encode(usersDto.getPassword()));
        Users users = usersMapper.toUsers(usersDto);
        Roles roles = rolesService.getRoleByRoleName("PHUHUYNH");
        users.getRoles().add(roles);

        return usersRepository.save(users);
    }

    public List<Users> getAllUser(){
        return usersRepository.findAll();
    }

    public void deleteUser(int idUser){
        usersRepository.deleteById(idUser);
    }

    public List<Users> findUserByRole(String roleName){
        Roles roles = rolesService.getRoleByRoleName(roleName);
        List<Users> users = usersRepository.findAllByRoles(roles);
        return users;
    }

    public Users changeInfoUser(ChangeInfoUserDto changeInfoUserDto)
    {
        logger.info("Change information user");
        Users users = getById(changeInfoUserDto.getIdUser());
        users.setPhone(changeInfoUserDto.getPhone());
        users.setAddress(changeInfoUserDto.getAddress());
        users.setEmail(changeInfoUserDto.getEmail());
        users.setName(changeInfoUserDto.getName());

        return saveUser(users);
    }

}
