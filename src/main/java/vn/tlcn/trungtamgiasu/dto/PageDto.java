package vn.tlcn.trungtamgiasu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.tlcn.trungtamgiasu.model.Classes;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PageDto {
    private List<Classes> pageData;
    int totalPage;
    int pageNum;
}
