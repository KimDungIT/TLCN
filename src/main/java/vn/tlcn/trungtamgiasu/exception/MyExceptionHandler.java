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
        logger.error("Not found user exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_ROLE", r.getMessage()));
    }
    //Not create tutor exception
    @ExceptionHandler({TutorNotCreateException.class})
    public ResponseEntity<ErrorResponse> HanderException(TutorNotCreateException r)
    {
        logger.error("Not create tutor exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CREATE_TUTOR", r.getMessage()));
    }
    //Not create class exception
    @ExceptionHandler({ClassNotCreateException.class})
    public ResponseEntity<ErrorResponse> HanderException(ClassNotCreateException r)
    {
        logger.error("Not create class exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CREATE_CLASS", r.getMessage()));
    }
    //Not store file exception
    @ExceptionHandler({FileNotStoreException.class})
    public ResponseEntity<ErrorResponse> HanderException(FileNotStoreException r)
    {
        logger.error("Not store file exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_STORE_FILE", r.getMessage()));
    }

    //Not change password exception
    @ExceptionHandler({NotChangePasswordException.class})
    public ResponseEntity<ErrorResponse> HanderException(NotChangePasswordException r)
    {
        logger.error("Not change password exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CHANGE_PASSWORD", r.getMessage()));
    }

    //Not change password exception
    @ExceptionHandler({UserNotChangeException.class})
    public ResponseEntity<ErrorResponse> HanderException(UserNotChangeException r)
    {
        logger.error("Not change info user exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CHANGE_USER", r.getMessage()));
    }
    //Not found class exception
    @ExceptionHandler({ClassesNotFoundException.class})
    public ResponseEntity<ErrorResponse> HanderException(ClassesNotFoundException r)
    {
        logger.error("Not found class exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_CLASS", r.getMessage()));
    }
    //Not register class exception
    @ExceptionHandler({TutorNotRegisterClassException.class})
    public ResponseEntity<ErrorResponse> HanderException(TutorNotRegisterClassException r)
    {
        logger.error("Not register class exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_REGISTER_CLASS", r.getMessage()));
    }
    //Not found tutor exception
    @ExceptionHandler({TutorNotFoundException.class})
    public ResponseEntity<ErrorResponse> HanderException(TutorNotFoundException r)
    {
        logger.error("Not found tutor exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_TUTOR", r.getMessage()));
    }

    //Not change tutor exception
    @ExceptionHandler({TutorNotChangeException.class})
    public ResponseEntity<ErrorResponse> HanderException(TutorNotChangeException r)
    {
        logger.error("Not change tutor exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CHANGE_TUTOR", r.getMessage()));
    }

    //Not change status class exception
    @ExceptionHandler({NotChangeStatusClass.class})
    public ResponseEntity<ErrorResponse> HanderException(NotChangeStatusClass r)
    {
        logger.error("Not change status class exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_CHANGE_STATUS_CLASS", r.getMessage()));
    }

    //Class register not found exception
    @ExceptionHandler({ClassRegisterNotFoundException.class})
    public ResponseEntity<ErrorResponse> HanderException(ClassRegisterNotFoundException r)
    {
        logger.error("Class register not found exception");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("NOT_FOUND_CLASS_REGISTER", r.getMessage()));
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
