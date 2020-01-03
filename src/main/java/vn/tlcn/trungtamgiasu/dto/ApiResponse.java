package vn.tlcn.trungtamgiasu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse {
    private int status;
    private String message;
    private Object result;

    public ApiResponse(HttpStatus status, String message, Object result){
        this.status = status.value();
        this.message = message;
        this.result = result;
    }

    public ApiResponse(HttpStatus status, String message){
        this.status = status.value();
        this.message = message;
    }

}
