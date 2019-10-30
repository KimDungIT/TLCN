package vn.tlcn.trungtamgiasu.dto.mapper;

import org.mapstruct.Mapper;
import vn.tlcn.trungtamgiasu.dto.Tutors.TutorsDto;
import vn.tlcn.trungtamgiasu.model.Tutors;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TutorsMapper {

    TutorsDto toTutorsDto(Tutors tutors);

    List<TutorsDto> toTutorsDtoList(List<Tutors> tutorsList);

    Tutors toTutors(TutorsDto tutorsDto);

}
