package edu.ijse.pos.exception;

public class ResourceNotFoundException extends Throwable {
    public ResourceNotFoundException(String resourceNotFound) {
        super(resourceNotFound);
    }
}
