package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.Classes.ClassesDto;
import vn.tlcn.trungtamgiasu.dto.SearchDto;
import vn.tlcn.trungtamgiasu.dto.mapper.ClassesMapper;
import vn.tlcn.trungtamgiasu.model.Classes;
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
    public ApiResponse getTopSixClasses() {
        logger.info("Get top six classes");
        return new ApiResponse(
                HttpStatus.OK,
                "Get top six classes successfully",
                classesMapper.toClassesDtoList(classesService.getTopSixClasses("Lớp mới")));
    }

    @PostMapping(value = "/createClass")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse createClass(@RequestBody ClassesDto classesDto, OAuth2Authentication auth) {
        logger.info("Create class controller");
        return new ApiResponse(
                HttpStatus.OK,
                "Create class successfully",
                classesService.createClass(classesDto, auth));
    }

    @GetMapping
    public ApiResponse getNewClasses(@PageableDefault(size = 9) Pageable pageable){
        logger.info("Get new classes");
        Page<Classes> page = classesService.getListClassesByStatus("Lớp mới", pageable);
        return  new ApiResponse(
                HttpStatus.OK,
                "Get new classes successfully",
               page);
    }
    @GetMapping(value = "/{id}/register")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse getClassById(@PathVariable("id") int id) {
        logger.info("Get class by id: " + id);
        return  new ApiResponse(
                HttpStatus.OK,
                "Get class successfully",
                classesService.getClassById(id));
    }

    @GetMapping(value = "/classesSuggest")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse getListClassTutorCanTeach(@RequestParam(value = "idUser")int idUser,
                                                 @PageableDefault(size = 9) Pageable pageable) {
        logger.info("Search class");
        logger.info("Get list classes tutor can teach");

        return new ApiResponse(
                HttpStatus.OK,
                "Get list classes tutor can teach successfully",
                classesService.getListClassesTutorCanTeach(idUser, pageable));
    }

    @GetMapping(value = "/listClassesOfUser")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse getListClassesOfUser(@RequestParam(value = "idUser") int idUser){
        logger.info("Get list class of user");
        return new ApiResponse(HttpStatus.OK,
                "Get list class of user successfully!",
                classesService.getListClassesOfUser(idUser));
    }

    @GetMapping(value = "/class")
    public ApiResponse getListClassesByClassTeach(@RequestParam("classTeach") String classTeach,
                                                  @PageableDefault(size = 9) Pageable pageable){
        logger.info("Get list classes by class teach");
        Page<Classes> page = classesService.getListClassesByClassTeach(classTeach, pageable);
        return new ApiResponse(HttpStatus.OK,
                "Get list classes by class teach successfully",
                page);
    }

    @GetMapping(value = "/subject")
    public ApiResponse getListClassesBySubject(@RequestParam("subject") String subject) {
        logger.info("Get list classes by subject");
        return new ApiResponse(HttpStatus.OK,
                "Get list classes by subject successfully",
                classesService.getListClassesBySubject(subject));
    }

    @GetMapping(value = "/district")
    public ApiResponse getListClassesByDistrict(@RequestParam("district") String district) {
        logger.info("Get list classes by district");
        return new ApiResponse(HttpStatus.OK,
                "Get list classes by subject successfully",
                classesService.getListClassByDistrict(district));
    }

    @DeleteMapping(value = "/changeStatus")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse changeStatusClass(@RequestParam("idClass") int idClass) {
        logger.info("Change status class");
        return new ApiResponse(HttpStatus.OK,
                "Change status class successfully",
                classesService.cancelClassRegister("Đã huỷ", idClass));
    }

    @PostMapping(value = "/spec")
    public ApiResponse searchClass(@RequestBody SearchDto searchDto, @PageableDefault(size = 9) Pageable pageable) {
        logger.info("Search class");
        Page<Classes> page = classesService.searchClass(searchDto, pageable);
        return new ApiResponse(HttpStatus.OK,
                "Search class successfully",
                page);
    }

    @GetMapping(value = "/top")
    public ApiResponse listClassTop() {
        logger.info("list class top");
        return new ApiResponse(HttpStatus.OK,
                "Get list class top successfully",
                classesService.getListTop());
    }
    @GetMapping(value = "/relate")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse listClassRelate(@RequestParam("classTeach") String classTeach) {
        logger.info("list class relate");
        return new ApiResponse(HttpStatus.OK,
                "Get list class relate successfully",
                classesService.getListClassRelate(classTeach));
    }
}
