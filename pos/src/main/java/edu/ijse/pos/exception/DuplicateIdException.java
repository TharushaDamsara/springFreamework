package edu.ijse.pos.exception;

public class DuplicateIdException extends Throwable {
    public DuplicateIdException(String idAlreadyExist) {
        super(idAlreadyExist);
    }
}
