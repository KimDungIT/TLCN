package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.tlcn.trungtamgiasu.dto.ApiResponse;
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

    @GetMapping
    public ApiResponse getTopSixClasses()
    {
        logger.info("Get top six classes");
        return new ApiResponse(
                HttpStatus.OK,
                "Get top six classes successfully",
                classesMapper.toClassesDtoList(classesService.getTopSixClasses()));
    }
}
