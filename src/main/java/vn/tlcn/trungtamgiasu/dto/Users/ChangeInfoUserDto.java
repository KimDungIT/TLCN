package vn.tlcn.trungtamgiasu.dto.Users;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChangeInfoUserDto {
    private int idUser;

    @NotBlank
    private String name;

    @NotBlank
    @Length(min = 10, max = 11)
    private String phone;

    @NotBlank
    private String address;

    @Email(message = "Incorrect format email.")
    private String email;
}
