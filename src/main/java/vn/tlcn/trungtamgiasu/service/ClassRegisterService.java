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
import vn.tlcn.trungtamgiasu.dto.mapper.ClassRegisterMapper;
import vn.tlcn.trungtamgiasu.exception.TutorNotRegisterClassException;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.repository.ClassRegisterRepository;

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
    private UsersService usersService;

    @Autowired
    TokenStore tokenStore;

    public ClassRegister saveClassRegister(ClassRegister classRegister)
    {
        logger.info("save class register");
        return classRegisterRepository.save(classRegister);
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
        List<ClassRegister> classRegisters = getListTutorRegister(idClass);
        //check tutor has already registered and check max tutor can register
        if(classRegisters.size() > 0)
        {
            for (ClassRegister item: classRegisters) {
                if (item.getTutors().getIdTutor() == tutors.getIdTutor())
                {
                    throw new TutorNotRegisterClassException("Can not register class " + idClass);
                }
            }
            if(classRegisters.size() > 5)
            {
                throw new TutorNotRegisterClassException("Can not register class " + idClass);
            }
        }

        logger.info("Tutor " + tutors.getIdTutor() + " register " + "class" + idClass );

        classRegisterDto.setStatus("Xem xét");
        ClassRegister classRegister = saveClassRegister(classRegisterMapper.toClassRegister(classRegisterDto));
        classRegister.setTutors(tutors);
        classRegister.setClasses(classesService.getClassById(idClass));

        return saveClassRegister(classRegister);
    }

    public List<ClassRegister> getListTutorRegister(int idClass)
    {
        logger.info("Get list ");
        return classRegisterRepository.findAllByClasses(classesService.getClassById(idClass));
    }


}
