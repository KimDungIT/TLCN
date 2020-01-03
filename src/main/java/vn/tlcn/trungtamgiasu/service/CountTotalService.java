package vn.tlcn.trungtamgiasu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.CountTotalDto;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Tutors;
import vn.tlcn.trungtamgiasu.model.Users;

import java.util.List;

@Service
public class CountTotalService {
    @Autowired
    private UsersService usersService;

    @Autowired
    private TutorsService tutorsService;

    @Autowired
    private ClassesService classesService;

    public CountTotalDto countTotal(){
        CountTotalDto countTotalDto = new CountTotalDto();
        List<Classes> classes = classesService.getAllClass();
        countTotalDto.setTotalClass(classes.size());

        List<Tutors> tutors = tutorsService.getListTutor();
        countTotalDto.setTotalTutor(tutors.size());

        List<Users> parents = usersService.findUserByRole("PHUHUYNH");
        countTotalDto.setTotalParent(parents.size());

        List<Users> admins = usersService.findUserByRole("ADMIN");
        countTotalDto.setTotalAdmin(admins.size());

        return countTotalDto;
    }
}
