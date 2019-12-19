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
import vn.tlcn.trungtamgiasu.model.Users;
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
                classesMapper.toClassesDtoList(classesService.getTopSixClasses()));
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
    public ApiResponse getListClassTutorCanTeach(@RequestParam(value = "idUser")int idUser){
        logger.info("Get list classes tutor can teach");
        return new ApiResponse(
                HttpStatus.OK,
                "Get list classes tutor can teach successfully",
                classesService.getListClassesTutorCanTeach(idUser));
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
    public ApiResponse getListClassesByClassTeach(@RequestParam("classTeach") String classTeach){
        logger.info("Get list classes by class teach");
        return new ApiResponse(HttpStatus.OK,
                "Get list classes by class teach successfully",
                classesService.getListClassesByClassTeach(classTeach));
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

    @PatchMapping(value = "/changeStatus")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[PHUHUYNH]')")
    public ApiResponse changeStatusClass(@RequestParam("idClass") int idClass) {
        logger.info("Change status class");
        return new ApiResponse(HttpStatus.OK,
                "Change status class successfully",
                classesService.cancelClassRegister("Đã huỷ", idClass));
    }

    @GetMapping(value = "/spec")
    public ApiResponse searchClass(@RequestBody SearchDto searchDto) {
        logger.info("Search class");
        return new ApiResponse(HttpStatus.OK,
                "Search class successfully",
                classesService.searchClass(searchDto));
    }

    @GetMapping(value = "/all")
    public ApiResponse getAllClasses(){
        return new ApiResponse(
                HttpStatus.OK,
                "Get all classes",
                classesService.getAllClass()
        );
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasAnyAuthority('[ADMIN]')")
    public ApiResponse deleteClass(@PathVariable(value = "id")int id){
        classesService.deleteClass(id);
        return new ApiResponse(
                HttpStatus.OK,
                "Delete class"
        );
    }

    @PostMapping("")
    @PreAuthorize("hasAnyAuthority('[ADMIN]')")
    public ApiResponse createClass(@RequestBody ClassesDto classesDto,String parentPhoneNumber)
    {
        logger.info("Create class controller");
        return new ApiResponse(
                HttpStatus.OK,
                "Create class successfully",
                classesService.createClass(classesDto, parentPhoneNumber)
        );
    }

    @PatchMapping("")
    @PreAuthorize("hasAnyAuthority('[ADMIN]')")
    public ApiResponse updateClass(@RequestBody ClassesDto classesDto)
    {
        Classes classes = classesService.getClassById(classesDto.getIdClass());
        Users parent = classesService.getParent(classes);

        if(classes != null){
            classes = classesMapper.toClasses(classesDto);
            classes.setUsers(parent);
            return new ApiResponse(
                    HttpStatus.OK,
                    "Update class successfully",
                    classesService.saveClass(classes)
            );
        }
        return new ApiResponse(
                HttpStatus.OK,
                "Update class fail"
        );
    }
    @GetMapping("{id}/parent")
    public ApiResponse getParent(@PathVariable(value = "id")int id){
        Classes classes = classesService.getClassById(id);
        if(classes != null){
            return  new ApiResponse(
                    HttpStatus.OK,
                    "Get parent",
                    classesService.getParent(classes)
            );
        }
        return new ApiResponse(
                HttpStatus.OK,
                "fail"
        );
    }
    @GetMapping("/pending")
    public ApiResponse getNewClassesPending(){
        logger.info("Get new classes pending");
        return  new ApiResponse(
                HttpStatus.OK,
                "Get new classes pending successfully",
                classesService.getListClassesByStatus("Chờ duyệt"));
    }
}