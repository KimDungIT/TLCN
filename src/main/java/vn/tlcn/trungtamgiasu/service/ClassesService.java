package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Classes.ClassesDto;
import vn.tlcn.trungtamgiasu.dto.mapper.ClassesMapper;
import vn.tlcn.trungtamgiasu.exception.ClassesNotFoundException;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.repository.ClassesRepository;

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
    TokenStore tokenStore;

    public List<Classes> getTopSixClasses()
    {
        logger.info("Get top six classes");
        return classesRepository.findTop6By();
    }

    public Classes saveClass(Classes classes)
    {
        logger.info("Save class");
        return classesRepository.save(classes);
    }

    public Classes createClass(ClassesDto classesDto, OAuth2Authentication auth)
    {
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

    public List<Classes> getListClassesByStatus(String status){
        logger.info("Get list classes by status");

        return classesRepository.findAllByStatus(status);
    }

    public Classes getClassById(int id)
    {
        logger.info("Get class by id: "+ id);
        return classesRepository.findByIdClass(id).orElseThrow(()-> new  ClassesNotFoundException("Cant not found class"));
    }
}
