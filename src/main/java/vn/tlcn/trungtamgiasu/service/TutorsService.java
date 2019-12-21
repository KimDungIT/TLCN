package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vn.tlcn.trungtamgiasu.dto.Tutors.TutorsDto;
import vn.tlcn.trungtamgiasu.dto.mapper.TutorsMapper;
import vn.tlcn.trungtamgiasu.exception.FileNotStoreException;
import vn.tlcn.trungtamgiasu.exception.TutorNotChangeException;
import vn.tlcn.trungtamgiasu.exception.TutorNotFoundException;
import vn.tlcn.trungtamgiasu.exception.UserNotFoundException;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.TutorsRepository;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

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

    public boolean checkFileNameExist(String fileName, int idUser)
    {
        List<Tutors> tutorsList = getListTutor();
        int dem = 0;
        for (Tutors item: tutorsList) {

            if(item.getImage().equals(fileName) && !(item.getUsers().getIdUser() == idUser))
            {
                return true;
            }
        }
//        if(dem > 1)
//        {
//            return true;
//        }
        return false;
    }

    public String changeFileNameIfExist(MultipartFile file, int idUser)
    {
        int index = 1;
        String fileName = file.getOriginalFilename();
        String firstFileName = fileName.substring(0, fileName.lastIndexOf("."));
        String lastFileName = fileName.substring(fileName.lastIndexOf("."));
        boolean checkExist = checkFileNameExist(fileName, idUser);
        while (checkExist)
        {
            index++;
            checkExist = checkFileNameExist(String.format("%s (%d)%s", firstFileName, index, lastFileName), idUser);
            if (!checkExist) {
                fileName = String.format("%s (%d)%s", firstFileName, index, lastFileName);
            }
        }
        return fileName;
    }

    /**
     *
     * Upload image
     * @param file
     * @return String file name
     */
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

    /**
     * Create tutor
     * @param tutorsDto
     *
     * @return tutors
     */

    public Tutors createTutor(TutorsDto tutorsDto, int idUser)
    {

        logger.info("Create tutor service");
        tutorsDto.setStatus("Chưa nhận lớp");
        Tutors tutors = saveTutor(tutorsMapper.toTutors(tutorsDto));
        //set idUser
        tutors.setUsers(usersService.getById(idUser));
        return saveTutor(tutors);
    }

    /**
     * Check user exist in tutor table
     * @param idUser
     * @return boolean
     */
    public boolean isTutor(int idUser)
    {
        if(tutorsRepository.findByUsers(usersService.getById(idUser)).isPresent())
            return true;
        return  false;
    }

    /**
     * Get list tutor
     * @return list tutor
     */
    public List<Tutors> getListTutor()
    {
        logger.info("Get all tutors");
        return tutorsRepository.findAll();
    }

    /**
     * getTutorByIdUser
     * @param idUser
     * @return tutor
     */
    public Tutors getTutorByIdUser(int idUser)
    {
        logger.info("Get tutor by id ", idUser);
        return tutorsRepository.findByUsers(usersService.getById(idUser)).
                orElseThrow(() -> new  TutorNotFoundException("Can not found tutor"));
    }

    public Tutors getTutorByIdTutor(int idTutor)
    {
        logger.info("Get tutor by id tutor: "+ idTutor);
        return tutorsRepository.findByIdTutor(idTutor).
                orElseThrow(()-> new TutorNotFoundException("Can not found tutor"));
    }

    /**
     * Change information tutor
     * @param tutorsDto
     * @param idTutor
     * @param auth
     * @return tutor
     */
    public Tutors changeInfoTutor(TutorsDto tutorsDto, int idTutor, OAuth2Authentication auth)
    {
        logger.info("Change info tutor " + idTutor);
        String phone = auth.getName();
        if(!(getTutorByIdTutor(idTutor).getUsers().getPhone().equals(phone)))
        {
            throw new TutorNotChangeException("Can not change information tutor");
        }
        Tutors tutors = getTutorByIdTutor(idTutor);
        tutors.setClasses(tutorsDto.getClasses());
        tutors.setDistrictCanTeach(tutorsDto.getDistrictCanTeach());
        tutors.setGender(tutorsDto.getGender());
        tutors.setCollege(tutorsDto.getCollege());
        tutors.setMajor(tutorsDto.getMajor());
        tutors.setGraduationYear(tutorsDto.getGraduationYear());
        tutors.setLevel(tutorsDto.getLevel());
        tutors.setMoreInfo(tutorsDto.getMoreInfo());
        tutors.setSubjects(tutorsDto.getSubjects());

        return saveTutor(tutors);
    }

    /**
     * Read byte[] image from file
     * @param idUser
     * @param auth
     * @return byte[]
     */
    public byte[] readBytesFromFile(int idUser, OAuth2Authentication auth)
    {
        Users users = usersService.getByPhone(auth.getName());
        if(!(users.getIdUser() == idUser))
        {
            throw new UserNotFoundException("Can not found user");
        }
        String fileName = getTutorByIdUser(idUser).getImage();
        String filePath = "uploads\\" + fileName;
        FileInputStream fileInputStream = null;
        byte[] bytesArray = null;
        try{
            File file =new File(filePath);
            bytesArray = new byte[(int) file.length()];
            //read file into bytes[]
            fileInputStream = new FileInputStream(file);
            fileInputStream.read(bytesArray);

        }catch (IOException e) {
            e.printStackTrace();
        }finally {
            if (fileInputStream != null) {
                try {
                    fileInputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return bytesArray;
    }

    public String changeImage(MultipartFile file, OAuth2Authentication auth)
    {
        int idUser = usersService.getByPhone(auth.getName()).getIdUser();
        Tutors tutors = getTutorByIdUser(idUser);
        String oldFileName =  tutors.getImage();
        String newFileName = changeFileNameIfExist(file, idUser);
        tutors.setImage(newFileName);

        if(file.isEmpty())
        {
            throw new FileNotStoreException("Failed to store empty file");
        }

        try {
            if(newFileName.contains("..")){
                throw new FileNotStoreException("Sorry! Filename contains invalid path sequence " + newFileName);
            }
            Path dir = Paths.get(path).toAbsolutePath().normalize();
            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = dir.resolve(newFileName);
            InputStream is = file.getInputStream();
            Path oldPath = Paths.get("uploads\\"+oldFileName);
            //delete old file
            Files.delete(oldPath);
            //copy new file
            Files.copy(is, targetLocation,
                    StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new FileNotStoreException("Could not store file " + newFileName + ". Please try again!");
        }
        saveTutor(tutors);
        return newFileName;

    }

    public Users getUserByTutor(int idTutor){
        Tutors tutors = tutorsRepository.findByIdTutor(idTutor).orElse(null);
        Users users = new Users();
        if(tutors != null){
            users = tutors.getUsers();
        }
        return users;
    }

}
