package vn.tlcn.trungtamgiasu.dto.Classes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassesDto {

    private int idClass;

    @NotBlank
    private String grade;

    @NotBlank
    private String subject;

    @NotBlank
    private String timeTeach;

    @NotBlank
    private String address;

    @NotBlank
    private double salary;

    @NotBlank
    private double serviceFee;

    @NotNull
    private String genderRequirement;

    @NotNull
    private String levelRequirement;

    private String status;


}
