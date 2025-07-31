package edu.ijse.pos.exception;

public class NullIdExcepton extends Throwable {
    public NullIdExcepton(String idNotExist) {
        super(idNotExist);
    }
}
