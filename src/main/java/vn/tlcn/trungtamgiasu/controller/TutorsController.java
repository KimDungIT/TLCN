package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
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

    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    @PostMapping(value = "/uploadImage")
    public ApiResponse uploadImage(@RequestPart(value = "file")MultipartFile file,
                                   OAuth2Authentication auth)
    {
        logger.info("Upload image");

        return new ApiResponse(
                HttpStatus.OK,
                "Upload image successfully",
                tutorsService.uploadImage(file)
        );
    }

    @PostMapping(value = "/create")
    @PreAuthorize("hasAnyAuthority('[ADMIN]', '[GIASU]')")
    public ApiResponse createTuTor(@RequestBody TutorsDto tutorsDto,
                                   OAuth2Authentication auth)
    {
        logger.info("Create tutor");
        return new ApiResponse(
                HttpStatus.OK,
                "Create tutor successfully",
                tutorsService.createTutor(tutorsDto, auth));
    }

}
