package vn.tlcn.trungtamgiasu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SearchDto {
    int idClass;
    String classTeach;
    String subject;
    String district;
}
