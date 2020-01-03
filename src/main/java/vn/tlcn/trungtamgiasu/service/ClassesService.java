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
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.ClassRegisterRepository;
import vn.tlcn.trungtamgiasu.repository.ClassesRepository;
import vn.tlcn.trungtamgiasu.specification.ClassesSpecification;

import java.time.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    // admin
    public Classes createClass(ClassesDto classesDto, String parentPhoneNumber)
    {
        logger.info("Create class service");

        Users parent = usersService.getByPhone(parentPhoneNumber);
        Classes classes = saveClass(classesMapper.toClasses(classesDto));

        //set user
        classes.setUsers(usersService.getById(parent.getIdUser()));
        classes = saveClass(classes);
        return classes;
    }

    public List<Classes> getListClassesByStatus(String status){
        logger.info("Get list classes by status");

        return classesRepository.findAllByStatus(status);
    }

    public List<Classes> getAllClass(){
        return classesRepository.findAll();
    }

    public boolean deleteClass(int id){
        boolean flag = true;
        List<ClassRegister> classRegisters = classRegisterRepository.findAll();
        for (ClassRegister classRegister: classRegisters) {
            if(classRegister.getClasses().getIdClass() == id){
                flag = false;
            }
        }
        if(flag == true){
            classesRepository.deleteById(id);
        }
        return flag;
    }


    public Users getParent(Classes classes){
        return classes.getUsers();
    }

    public int[] countNumberOfClass(){
        int[] A = new int[12];
        List<Classes> classes = getAllClass();
        for (Classes classs: classes) {
            Instant dateCreated = classs.getDateCreated();
            ZoneId z = ZoneId.of("Asia/Ho_Chi_Minh");
            ZonedDateTime zdt = dateCreated.atZone(z);
            switch (zdt.getMonth()) {
                case JANUARY:
                    A[0] += 1;
                    break;
                case FEBRUARY:
                    A[1] += 1;
                    break;
                case MARCH:
                    A[2] += 1;
                    break;
                case APRIL:
                    A[3] += 1;
                    break;
                case MAY:
                    A[4] += 1;
                    break;
                case JUNE:
                    A[5] += 1;
                    break;
                case JULY:
                    A[6] += 1;
                    break;
                case AUGUST:
                    A[7] += 1;
                    break;
                case SEPTEMBER:
                    A[8] +=1;
                    break;
                case OCTOBER:
                    A[9] += 1;
                    break;
                case NOVEMBER:
                    A[10] += 1;
                    break;
                case DECEMBER:
                    A[11] += 1;
                    break;
            }
        }
        return A;
    }

    public int[] calPercentOfNumber(){
        int A[] = new int[4];
        List<Classes> classes = getAllClass();
        for (Classes classs: classes) {
            switch (classs.getStatus()){
                case "Lớp mới":
                    A[0] += 1;
                    break;
                case "Đã giao":
                    A[1] += 1;
                    break;
                case "Chờ duyệt":
                    A[2] += 1;
                    break;
                case "Không đạt":
                    A[3] += 1;
                    break;
            }
        }
        return A;
    }

}
