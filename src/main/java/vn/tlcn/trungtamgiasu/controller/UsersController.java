package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.Users.UsersDto;
import vn.tlcn.trungtamgiasu.dto.mapper.UsersMapper;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.service.UsersService;

@RestController
@RequestMapping(value = "/api/users")
public class UsersController {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private UsersService usersService;

    @Autowired
    private UsersMapper usersMapper;

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

}
