package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.ClassRegister.ClassRegisterDto;
import vn.tlcn.trungtamgiasu.dto.TutorRegisterDto;
import vn.tlcn.trungtamgiasu.dto.mapper.ClassRegisterMapper;
import vn.tlcn.trungtamgiasu.exception.ClassRegisterNotFoundException;
import vn.tlcn.trungtamgiasu.exception.NotChangeStatusClass;
import vn.tlcn.trungtamgiasu.exception.TutorNotRegisterClassException;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.repository.ClassRegisterRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ClassRegisterService {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private ClassRegisterRepository classRegisterRepository;

    @Autowired
    private ClassRegisterMapper classRegisterMapper;

    @Autowired
    private TutorsService tutorsService;

    @Autowired ClassesService classesService;



    @Autowired
    TokenStore tokenStore;

    public ClassRegister saveClassRegister(ClassRegister classRegister)
    {
        logger.info("save class register");
        return classRegisterRepository.save(classRegister);
    }

    public ClassRegister getById(int id) {
        logger.info("Get by id: "+ id);
        return classRegisterRepository.findById(id).orElseThrow(()-> new  ClassRegisterNotFoundException("Can not found class register"));
    }

    public ClassRegister createClassRegister(ClassRegisterDto classRegisterDto, int idClass, OAuth2Authentication auth)
    {
        logger.info("Create class register");
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        OAuth2AccessToken accessToken = tokenStore.readAccessToken(details.getTokenValue());
        Map<String, Object> additionalInfo = accessToken.getAdditionalInformation();
        //get id user from token
        int idUser = (Integer.valueOf(additionalInfo.get("idUser").toString()));
        Tutors tutors = tutorsService.getTutorByIdUser(idUser);
        List<ClassRegister> classRegisters = classRegisterRepository.findAllByClasses(classesService.getClassById(idClass));
        //check tutor has already registered and check max tutor can register
        if(classRegisters.size() > 0)
        {
            for (ClassRegister item: classRegisters) {
                if (item.getTutors().getIdTutor() == tutors.getIdTutor())
                {
                    throw new TutorNotRegisterClassException("Tutor is already registered. Can not register class " + idClass);
                }
            }
            if(classRegisters.size() >= 5)
            {
                throw new TutorNotRegisterClassException("Five tutors were registered. Can not register class " + idClass);
            }
        }
        logger.info("Tutor " + tutors.getIdTutor() + " register " + "class" + idClass );
        classRegisterDto.setStatus("Xem xét");
        ClassRegister classRegister = saveClassRegister(classRegisterMapper.toClassRegister(classRegisterDto));
        classRegister.setTutors(tutors);
        classRegister.setClasses(classesService.getClassById(idClass));
        return saveClassRegister(classRegister);
    }

    public List<ClassRegister> getListTutorRegisterClass(int idUser) {
        logger.info("Get list tutor register class");
        Tutors tutors = tutorsService.getTutorByIdUser(idUser);
        return classRegisterRepository.getAllByTutors(tutors.getIdTutor());
    }

    public ClassRegister changeStatusClassRegister(int id) {
        logger.info("Change status class register: " + id);
        ClassRegister classRegister = getById(id);
        if(classRegister.getStatus().equals("Xem xét")) {
            classRegisterRepository.delete(classRegister);
           // classRegisterRepository.changeStatusClassRegister(status, id);
        } else {
            throw new NotChangeStatusClass("Can not change status class register");
        }
        return classRegister;
    }
    public List<ClassRegister> getListInfoTutorRegister(int idClass) {
        logger.info("Get list tutor register class: " + idClass);
//        List<ClassRegister> listClassesRegister = classRegisterRepository.getAllByClasses(idClass);
//        List<TutorRegisterDto> tutorRegisterDto = new ArrayList<>();
//        for (ClassRegister item: listClassesRegister) {
//            TutorRegisterDto tutorRegister = new TutorRegisterDto();
//            tutorRegister.setIdUser(item.getTutors().getUsers().getIdUser());
//            tutorRegister.setLevel(item.getTutors().getLevel());
//            tutorRegister.setName(item.getTutors().getUsers().getName());
//            tutorRegister.setPayments(item.getPayments());
//            tutorRegister.setStatus(item.getStatus());
//            tutorRegisterDto.add(tutorRegister);
//        }
//        return tutorRegisterDto;
        return classRegisterRepository.findAllByClasses(classesService.getClassById(idClass));
    }
    public List<ClassRegister> getAllListClassRegister(){
        return classRegisterRepository.findAll();
    }
    public ClassRegister getClassRegisterById(int idClassRegister){
        return classRegisterRepository.findByIdClassRegister(idClassRegister).orElse(null);
    }

    // ko đạt yêu cầu
    public List<ClassRegister> getListClassRegisterFail(int idClass){
        Classes classes = classesService.getClassById(idClass);
        return classRegisterRepository.getAllByClassesAndStatus(classes, "Xem xét");
    }

    public List<ClassRegister> getListClassRegisterPending(){
        return classRegisterRepository.findAllByStatus("Xem xét");
    }
}
