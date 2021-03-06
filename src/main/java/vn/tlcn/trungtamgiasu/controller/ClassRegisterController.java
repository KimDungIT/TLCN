package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.ClassRegister.ClassRegisterDto;
import vn.tlcn.trungtamgiasu.service.ClassRegisterService;

@RestController
@RequestMapping(value = "/api/classRegister")
public class ClassRegisterController {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private ClassRegisterService classRegisterService;

    @PostMapping(value = "/create")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse createClassRegister(@RequestBody ClassRegisterDto classRegisterDto,
                                           @RequestParam("idClass") int idClass,
                                           OAuth2Authentication auth)
    {
        logger.info("Create class register");
        return new ApiResponse(
                HttpStatus.OK,
                "Register class successfully",
                classRegisterService.createClassRegister(classRegisterDto, idClass, auth));
    }

    @GetMapping(value = "/getListRegister")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]', '[PHUHUYNH]')")
    public ApiResponse getListRegister(@RequestParam("idClass") int idClass)
    {
        logger.info("Get list register by " + idClass);
        return new ApiResponse(
                HttpStatus.OK,
                "Get list register successfully",
                classRegisterService.getListInfoTutorRegister(idClass));
    }

    @GetMapping(value = "/getListClassTutorRegister")
    @PreAuthorize(("hasAnyAuthority('[ADMIN]', '[GIASU]')"))
    public ApiResponse getListClassTutorRegister(@RequestParam("idUser") int idUser)
    {
        logger.info("Get list class tutor register");
        return new ApiResponse(
                HttpStatus.OK,
                "Get list class register successfully",
                classRegisterService.getListTutorRegisterClass(idUser));
    }

    @DeleteMapping(value = "/changeStatus")
    @PreAuthorize(("hasAnyAuthority('[ADMIN]', '[GIASU]')"))
    public ApiResponse changeStatusClassRegister(@RequestParam("idClassRegister") int idClassRegister) {
        logger.info("Change status class register");
        return new ApiResponse(
                HttpStatus.OK,
                "Change status class register successfully",
                classRegisterService.changeStatusClassRegister(idClassRegister));
    }

    @GetMapping()
    public ApiResponse getAllListClassRegester(){
        logger.info("Get all list class register");
        return new ApiResponse(
                HttpStatus.OK,
                "Get all list class register",
                classRegisterService.getAllListClassRegister()
        );
    }

    @GetMapping(value = "/{idClassRegister}")
    public ApiResponse getClassRegisterById(@PathVariable(value = "idClassRegister") int idClassRegister){
        return new ApiResponse(
                HttpStatus.OK,
                "Get class register by ID",
                classRegisterService.getClassRegisterById(idClassRegister)
        );
    }

    @GetMapping(value = "/pending")
    public ApiResponse getListClassRegisterPending(){
        return new ApiResponse(
                HttpStatus.OK,
                "Get all class register pending",
                classRegisterService.getListClassRegisterPending()
        );
    }
}
