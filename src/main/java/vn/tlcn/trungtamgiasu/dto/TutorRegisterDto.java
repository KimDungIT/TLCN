package vn.tlcn.trungtamgiasu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TutorRegisterDto {

    private int idUser;
    private String name;
    private String level;
    private String payments;
    private String status;
}
