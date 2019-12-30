package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.Users.ChangeInfoUserDto;
import vn.tlcn.trungtamgiasu.dto.Users.ChangePasswordDto;
import vn.tlcn.trungtamgiasu.dto.Users.UsersDto;
import vn.tlcn.trungtamgiasu.dto.mapper.UsersMapper;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.service.UsersService;

import java.util.Map;

@RestController
@RequestMapping(value = "/api/users")
public class UsersController {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private UsersService usersService;

    @Autowired
    private UsersMapper usersMapper;

    @Autowired
    TokenStore tokenStore;

    @PostMapping(value = "/signUp")
    public ApiResponse signUp(@RequestParam("type") String type ,@RequestBody UsersDto usersDto)
    {
        logger.info("sign up controller");
        Users users = usersService.signUp(type, usersDto);
        return new ApiResponse(
                HttpStatus.OK,
                "Sign up successfully",
                users);
    }

    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]', '[PHUHUYNH]')")
    @PatchMapping(value = "/changePassword")
    public ApiResponse changePassword(@RequestBody ChangePasswordDto changePasswordDto, OAuth2Authentication auth) {

        logger.info("Change password");
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        OAuth2AccessToken accessToken = tokenStore.readAccessToken(details.getTokenValue());
        Map<String, Object> additionalInfo = accessToken.getAdditionalInformation();

        //get id user from token
        int idUser = (Integer.valueOf(additionalInfo.get("idUser").toString()));
        Users users = usersService.changePassword(changePasswordDto, idUser, auth);
        return new ApiResponse(
                HttpStatus.OK,
                "Change password successfully",
                users);
    }

    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]', '[PHUHUYNH]')")
    @GetMapping(value = "/getUser")
    public ApiResponse getUser(OAuth2Authentication auth)
    {
        String phone = auth.getName();
        logger.info("Get user by phone: "+ phone);
        return new ApiResponse(
                HttpStatus.OK,
                "Get user successfully",
                usersService.getByPhone(phone));
    }

    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]', '[PHUHUYNH]')")
    @PostMapping(value = "/changeInfo")
    public ApiResponse changeInfoUser(@RequestBody ChangeInfoUserDto changeInfoUserDto, OAuth2Authentication auth)
    {
        logger.info("Change info user");
        return new ApiResponse(
                HttpStatus.OK,
                "Change information user successfully",
                usersService.changeInfoUser(changeInfoUserDto, auth));
    }

    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    @GetMapping(value = "/getUserByTutor")
    public ApiResponse getListUserRegisterClass(@RequestParam("phone")String phone)
    {
        logger.info("Get User by id tutor: " + phone);
        return new ApiResponse(
                HttpStatus.OK,
                "Get user by id tutor successfully",
                usersService.getUserByIdTutor(phone));
    }

    @GetMapping(value = "/getUserById")
    public ApiResponse getUserById(@RequestParam("idUser")int idUser){
        return new ApiResponse(
                HttpStatus.OK,
                "Get user by ID",
                usersService.getById(idUser)
        );
    }

    @PostMapping(value = "/createParent")
    public ApiResponse createParent(@RequestBody UsersDto usersDto)
    {
        logger.info("createParent");
        return new ApiResponse(
                HttpStatus.OK,
                "Sign up successfully",
                usersService.createParent(usersDto));
    }

    @GetMapping()
    public ApiResponse getAllUser(){
        return new ApiResponse(
                HttpStatus.OK,
                "Get all user",
                usersService.getAllUser()
        );
    }

    @DeleteMapping()
    public ApiResponse deleteUser(@RequestParam("idUser")int idUser){
        usersService.deleteUser(idUser);
        return new ApiResponse(
                HttpStatus.OK,
                "Delete user"
        );
    }
//    @PatchMapping()
//    public ApiResponse updateUser(@RequestBody ChangeInfoUserDto changeInfoUserDto, OAuth2Authentication auth){
//        return new ApiResponse(
//                HttpStatus.OK,
//                "Update user",
//                usersService.changeInfoUser(changeInfoUserDto, auth)
//        );
//    }


    @PatchMapping()
    public ApiResponse updateUser(@RequestBody ChangeInfoUserDto changeInfoUserDto){
        return new ApiResponse(
                HttpStatus.OK,
                "Update user",
                usersService.changeInfoUser(changeInfoUserDto)
        );
    }
}
