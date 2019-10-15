package vn.tlcn.trungtamgiasu.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import vn.tlcn.trungtamgiasu.dto.ErrorResponse;

@ControllerAdvice
public class MyExceptionHandler extends ResponseEntityExceptionHandler {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    //Not found User exception
    @ExceptionHandler({UserNotFoundException.class})
    public ResponseEntity<ErrorResponse> HanderException(UserNotFoundException r)
    {
        logger.error("Not found user exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_USER", r.getMessage()));
    }
    //Not create User exception
    @ExceptionHandler({UserNotCreateException.class})
    public ResponseEntity<ErrorResponse> HanderException(UserNotCreateException r)
    {
        logger.error("Not create user exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CREATE_USER", r.getMessage()));
    }
    //Not found Role exception
    @ExceptionHandler({RoleNotFoundException.class})
    public ResponseEntity<ErrorResponse> HanderException(RoleNotFoundException r)
    {
        logger.error("Not create user exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_ROLE", r.getMessage()));
    }


    @ExceptionHandler({ Exception.class })
    public ResponseEntity<Object> handleAll(Exception ex, WebRequest request) {

        logger.error("INTERNAL_EX");
        ex.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse("INTERNAL_EX", ex.getMessage()));
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        return super.handleNoHandlerFoundException(ex, headers, status, request);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        ex.printStackTrace();
        return super.handleExceptionInternal(ex, body, headers, status, request);
    }
}
