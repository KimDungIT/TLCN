package vn.tlcn.trungtamgiasu.dto.ClassRegister;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassRegisterDto {

    private int idClassRegister;

    @NotBlank
    private String status;

    @NotBlank
    private Date dateReceive;

    @NotBlank
    private String payments;

    private String moreRequire;
}
