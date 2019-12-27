package vn.tlcn.trungtamgiasu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountTotalDto {
    private int totalClass;
    private int totalTutor;
    private int totalParent;
    private int totalAdmin;
}
