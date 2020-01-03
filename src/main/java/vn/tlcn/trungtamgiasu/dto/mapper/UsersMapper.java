package vn.tlcn.trungtamgiasu.dto.mapper;

import org.mapstruct.Mapper;
import vn.tlcn.trungtamgiasu.dto.Users.UsersDto;
import vn.tlcn.trungtamgiasu.model.Users;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UsersMapper {

    UsersDto toUsersDto(Users users);

    List<UsersDto> toUsersDtoList(List<Users> usersList);

    Users toUsers(UsersDto usersDto);
}
