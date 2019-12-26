package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Classes.ClassesDto;
import vn.tlcn.trungtamgiasu.dto.SearchDto;
import vn.tlcn.trungtamgiasu.dto.mapper.ClassesMapper;
import vn.tlcn.trungtamgiasu.exception.ClassesNotFoundException;
import vn.tlcn.trungtamgiasu.exception.NotChangeStatusClass;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.repository.ClassRegisterRepository;
import vn.tlcn.trungtamgiasu.repository.ClassesRepository;
import vn.tlcn.trungtamgiasu.specification.ClassesSpecification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ClassesService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private ClassesRepository classesRepository;

    @Autowired
    private ClassesMapper classesMapper;

    @Autowired
    private UsersService usersService;

    @Autowired
    private ClassRegisterService classRegisterService;

    @Autowired
    private ClassRegisterRepository classRegisterRepository;

    @Autowired
    private TutorsService tutorsService;

    @Autowired
    TokenStore tokenStore;

    public List<Classes> getTopSixClasses(String status){
        logger.info("Get top six classes");
        return classesRepository.findTop6ByStatus(status);
    }

    public Classes saveClass(Classes classes) {
        logger.info("Save class");
        return classesRepository.save(classes);
    }

    public Classes createClass(ClassesDto classesDto, OAuth2Authentication auth) {
        logger.info("Create class service");
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        OAuth2AccessToken accessToken = tokenStore.readAccessToken(details.getTokenValue());
        Map<String, Object> additionalInfo = accessToken.getAdditionalInformation();
        //get id user from token
        int idUser = (Integer.valueOf(additionalInfo.get("idUser").toString()));
        //set status
        classesDto.setStatus("Chờ duyệt");
        Classes classes = saveClass(classesMapper.toClasses(classesDto));
        //set user
        classes.setUsers(usersService.getById(idUser));
        classes = saveClass(classes);
        return classes;
    }

    public Page<Classes> getListClassesByStatus(String status, Pageable pageable){
        logger.info("Get list classes by status");
        return classesRepository.findAllByStatus(status, pageable);
    }

    public Classes getClassById(int id) {
        logger.info("Get class by id: "+ id);
        return classesRepository.findByIdClass(id).orElseThrow(()-> new  ClassesNotFoundException("Cant not found class"));
    }

    public Page<Classes> getListClassesTutorCanTeach(int idUser, Pageable pageable) {
        logger.info("Get list class tutor can teach");
        Tutors tutors = tutorsService.getTutorByIdUser(idUser);
        String classTeach = tutors.getClasses();
        String districtCanTeach = tutors.getDistrictCanTeach();
        String[] classArr = classTeach.split(",");
        String[] districtArr = districtCanTeach.split(",");
        List<Classes> result = new ArrayList<>();
        for (String item: classArr) {
            for (String district: districtArr) {
                result.addAll(classesRepository.findAllByClassTeachAndDistrict(item, district));
            }
        }
        System.out.printf(result.toString());
        Page<Classes> listClasses = new PageImpl<>(result, pageable, result.size());
        return  listClasses;
    }

    public List<Classes> getListClassesOfUser(int idUser) {
        logger.info("Get list classes of user");
        return classesRepository.getListClassByUser(idUser);
    }

    public Page<Classes> getListClassesByClassTeach(String classTeach, Pageable pageable) {
        logger.info("Get list classes by class teach: "+ classTeach);
        return classesRepository.findAllByClassTeach(classTeach, pageable);
    }

    public List<Classes> getListClassesBySubject(String subject) {
        logger.info("Get list classes by subject: "+ subject);
        return classesRepository.findAllBySubject(subject);
    }

    public List<Classes> getListClassByDistrict(String district) {
        logger.info("get list classes by district: " + district);
        return classesRepository.findAllByDistrictEquals(district);
    }

    public Classes cancelClassRegister(String status, int idClass) {
        logger.info("Cancel class register: " + idClass);
        Classes classes = getClassById(idClass);
        if(classes.getStatus().equals("Chờ duyệt")) {
            classesRepository.delete(classes);
           // classesRepository.changeStatus(status, idClass);
        }
        else {
            throw new NotChangeStatusClass("Can not change status class");
        }
        return classes;
    }

    public Page<Classes> searchClass(SearchDto searchDto, Pageable pageable) {
        logger.info("Search class");
        int id = 0;
       Page<Classes> results = classesRepository.findAll(Specification.
                                where(ClassesSpecification.withClass(searchDto.getClassTeach(), "Lớp mới"))
                                .and(ClassesSpecification.withSubject(searchDto.getSubject(), "Lớp mới"))
                                .and(ClassesSpecification.withDistrict(searchDto.getDistrict(), "Lớp mới")), pageable);
       return results;
    }

    public List<Classes> getListTop() {
        logger.info("Get list class top");
        return classesRepository.getListClassesTop();
    }
    public List<Classes> getListClassRelate(String classTeach) {
        logger.info("Get list class relate");
        return classesRepository.getListClassRelate(classTeach);
    }


}
