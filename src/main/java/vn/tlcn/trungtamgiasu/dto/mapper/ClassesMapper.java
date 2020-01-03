package vn.tlcn.trungtamgiasu.dto.mapper;

import org.mapstruct.Mapper;
import vn.tlcn.trungtamgiasu.dto.Classes.ClassesDto;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ClassesMapper {

    ClassesDto toClassesDto(Classes classes);

    List<ClassesDto> toClassesDtoList(List<Classes> classesList);

    Classes toClasses(ClassesDto classesDto);
}
