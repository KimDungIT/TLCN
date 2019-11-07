package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vn.tlcn.trungtamgiasu.dto.Tutors.TutorsDto;
import vn.tlcn.trungtamgiasu.dto.mapper.TutorsMapper;
import vn.tlcn.trungtamgiasu.exception.FileNotStoreException;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.repository.TutorsRepository;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;

@Service
public class TutorsService {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private TutorsRepository tutorsRepository;

    @Autowired
    private TutorsMapper tutorsMapper;

    @Autowired
    TokenStore tokenStore;

    @Autowired
    private UsersService usersService;

    @Value("${file.upload-dir}")
    String path;

    /**
     * Save Tutor
     * @param tutors
     * @return tutor
     */
    public Tutors saveTutor(Tutors tutors)
    {
        logger.info("Save tutor service");
        return tutorsRepository.save(tutors);
    }

    public String uploadImage(MultipartFile file)
    {

        if(file.isEmpty())
        {
            throw new FileNotStoreException("Failed to store empty file");
        }
        String fileName = file.getOriginalFilename();

        try {
            if(fileName.contains("..")){
                throw new FileNotStoreException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Path dir = Paths.get(path).toAbsolutePath().normalize();
            try {
                Files.createDirectories(dir);
            } catch (Exception ex) {
                throw new FileNotStoreException("Could not create the directory where the uploaded files will be stored.");
            }
            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = dir.resolve(fileName);

            InputStream is = file.getInputStream();
            Files.copy(is, targetLocation,
                    StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new FileNotStoreException("Could not store file " + fileName + ". Please try again!");
        }
        return fileName;
    }

    public Tutors createTutor(TutorsDto tutorsDto, OAuth2Authentication auth)
    {
        logger.info("Create tutor service");

        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        OAuth2AccessToken accessToken = tokenStore.readAccessToken(details.getTokenValue());
        Map<String, Object> additionalInfo = accessToken.getAdditionalInformation();
        //get id user from token
        int idUser = (Integer.valueOf(additionalInfo.get("idUser").toString()));
        tutorsDto.setStatus("Chưa nhận lớp");
        Tutors tutors = saveTutor(tutorsMapper.toTutors(tutorsDto));
        //set idUser
        tutors.setUsers(usersService.getById(idUser));
        return saveTutor(tutors);
    }

}
