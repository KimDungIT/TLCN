package vn.tlcn.trungtamgiasu.dto.Classes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassesDto {

    private int id_class;

    private String grade;

    private String subject;

    private String time_teach;

    private String address;

    private double salary;

    private double service_fee;

    private String gender_requirement;

    private String level_requirement;

    private String status;


}
