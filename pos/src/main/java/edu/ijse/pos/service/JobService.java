package edu.ijse.pos.service;

import edu.ijse.pos.dto.JobDto;
import edu.ijse.pos.exception.DuplicateIdException;
import edu.ijse.pos.exception.NullIdExcepton;
import edu.ijse.pos.exception.ResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface JobService {
    public void saveJob(JobDto dto) throws DuplicateIdException;
    void updatejob(JobDto dto,int id) throws NullIdExcepton;

    Page<JobDto> getAll(Pageable pageable);

    void changeStatus(String id);

    JobDto findById(String id) throws ResourceNotFoundException;

    List<JobDto> findByKeyWord(String keyWord);

    Page<JobDto> getAllPaginated(int page, int size);
}
