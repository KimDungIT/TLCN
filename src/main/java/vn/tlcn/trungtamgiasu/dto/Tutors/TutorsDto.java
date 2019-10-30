package vn.tlcn.trungtamgiasu.dto.Tutors;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TutorsDto {

    private int idTutor;

    @NotBlank
    private String gender;

    @NotBlank
    private String yearOfBirth;

    private String image;

    @NotBlank
    private String major;

    @NotBlank
    private String college;

    @NotBlank
    private String graduationYear;

    @NotBlank
    private String subjects;

    @NotBlank
    private String classes;

    @NotBlank
    private String districtCanTeach;

    private String moreInfo;

    private String status;

}
