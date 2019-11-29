package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.Classes.ClassesDto;
import vn.tlcn.trungtamgiasu.dto.mapper.ClassesMapper;
import vn.tlcn.trungtamgiasu.service.ClassesService;

@RestController
@RequestMapping(value = "/api/classes")
public class ClassesController {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private ClassesService classesService;

    @Autowired
    private ClassesMapper classesMapper;

    @GetMapping(value = "/topSix")
    public ApiResponse getTopSixClasses()
    {
        logger.info("Get top six classes");
        return new ApiResponse(
                HttpStatus.OK,
                "Get top six classes successfully",
                classesMapper.toClassesDtoList(classesService.getTopSixClasses()));
    }

    @PostMapping(value = "/createClass")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse createClass(@RequestBody ClassesDto classesDto, OAuth2Authentication auth)
    {
        logger.info("Create class controller");
        return new ApiResponse(
                HttpStatus.OK,
                "Create class successfully",
                classesService.createClass(classesDto, auth));
    }

    @GetMapping
    public ApiResponse getNewClasses(){
        logger.info("Get new classes");
        return  new ApiResponse(
                HttpStatus.OK,
                "Get new classes successfully",
                classesService.getListClassesByStatus("Lớp mới"));
    }
    @GetMapping(value = "/{id}/register")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse getClassById(@PathVariable("id") int id)
    {
        logger.info("Get class by id: " + id);
        return  new ApiResponse(
                HttpStatus.OK,
                "Get class successfully",
                classesService.getClassById(id));
    }
    @GetMapping(value = "/listClassByClasses")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse getListClassTutorCanTeach(OAuth2Authentication auth)
    {
        logger.info("Get list classes tutor can teach");
        return new ApiResponse(
                HttpStatus.OK,
                "Get list classes tutor can teach successfully",
                classesService.getListClassTutorCanTeach(auth));
    }

    @GetMapping(value = "/listClassesOfUser")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse getListClassesOfUser(OAuth2Authentication auth)
    {
        logger.info("Get list class of user");
        return new ApiResponse(HttpStatus.OK,
                "Get list class of user successfully!",
                classesService.getListClassesOfUser(auth));
    }
}
