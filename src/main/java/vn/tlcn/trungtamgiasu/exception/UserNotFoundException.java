package vn.tlcn.trungtamgiasu.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message)
    {
        super(message);
    }
}
