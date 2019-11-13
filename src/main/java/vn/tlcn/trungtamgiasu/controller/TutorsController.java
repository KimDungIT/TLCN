package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
import vn.tlcn.trungtamgiasu.dto.Tutors.TutorsDto;
import vn.tlcn.trungtamgiasu.service.TutorsService;

@RestController
@RequestMapping(value = "/api/tutors")
public class TutorsController {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private TutorsService tutorsService;

    @PostMapping(value = "/uploadImage")
    public ApiResponse uploadImage(@RequestPart("file") MultipartFile file)
    {
        logger.info("Upload image");

        return new ApiResponse(
                HttpStatus.OK,
                "Upload image successfully",
                tutorsService.uploadImage(file)
        );
    }

    @PostMapping(value = "/create")
    public ApiResponse createTuTor(@RequestBody TutorsDto tutorsDto, @RequestParam("idUser") int idUser)
    {
        logger.info("Create tutor");
        return new ApiResponse(
                HttpStatus.OK,
                "Create tutor successfully",
                tutorsService.createTutor(tutorsDto, idUser));
    }

    @GetMapping(value = "/getTutor/{idUser}")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse getTutor(@PathVariable("idUser") int idUser)
    {
        logger.info("Get tutor");
        return new ApiResponse(
                HttpStatus.OK,
                "Get tutor successfully",
                tutorsService.getTutorByIdUser(idUser));
    }




}
