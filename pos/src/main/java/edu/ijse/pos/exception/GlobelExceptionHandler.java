package edu.ijse.pos.exception;

import edu.ijse.pos.utill.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobelExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<APIResponse> handleGenaricException(Exception e){
        return new ResponseEntity(new APIResponse(500, e.getMessage(), null), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<APIResponse> handleResourceNotFoundException(ResourceNotFoundException e){
        return new ResponseEntity(new APIResponse(404, e.getMessage(), null), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(DuplicateIdException.class)
    public ResponseEntity<APIResponse>handleDuplicateIdException(DuplicateIdException e){
        return new ResponseEntity(new APIResponse(404, e.getMessage(), null), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(NullIdExcepton.class)
    public  ResponseEntity<APIResponse>handleNullIdException(NullIdExcepton e){
        return new ResponseEntity(new APIResponse(404, e.getMessage(), null), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<APIResponse>handleMethodeArgumentNotValidationException(MethodArgumentNotValidException e){
        Map<String,String> erors = new HashMap<>();
        for (FieldError fieldError : e.getBindingResult().getFieldErrors()) {
            erors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return new ResponseEntity(new APIResponse(400, e.getMessage(), null), HttpStatus.BAD_REQUEST);
    }
}
