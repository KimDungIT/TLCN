package vn.tlcn.trungtamgiasu.dto.Users;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsersDto {

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

    @NotBlank
    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$")
    private String password;
}
