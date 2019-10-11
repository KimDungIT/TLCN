package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.repository.ClassesRepository;

import java.util.List;

@Service
public class ClassesService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    @Autowired
    private ClassesRepository classesRepository;

    public List<Classes> getTopSixClasses()
    {
        logger.info("Get six top classes");
        return classesRepository.findTop6By();
    }
}
