package vn.tlcn.trungtamgiasu.dto.mapper;

import org.mapstruct.Mapper;
import vn.tlcn.trungtamgiasu.dto.ClassRegister.ClassRegisterDto;
import vn.tlcn.trungtamgiasu.model.ClassRegister;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ClassRegisterMapper {
    ClassRegisterDto toClassRegisterDto(ClassRegister classRegister);

    List<ClassRegisterDto> toClassRegisterDtoList(List<ClassRegister> classRegisters);

    ClassRegister toClassRegister(ClassRegisterDto classRegisterDto);
}
