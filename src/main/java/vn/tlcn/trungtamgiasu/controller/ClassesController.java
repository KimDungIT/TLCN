package vn.tlcn.trungtamgiasu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.tlcn.trungtamgiasu.service.ClassesService;

@RestController
@RequestMapping("/classes")
public class ClassesController {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private ClassesService classesService;

    @GetMapping
    public ResponseEntity getTopSixClasses()
    {
        logger.info("Get top six classes");
        return ResponseEntity.ok().body(classesService.getTopSixClasses());
    }
}
