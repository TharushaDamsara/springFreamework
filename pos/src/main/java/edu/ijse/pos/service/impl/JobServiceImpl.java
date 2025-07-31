package edu.ijse.pos.service.impl;

import edu.ijse.pos.dto.JobDto;
import edu.ijse.pos.entity.job;
import edu.ijse.pos.exception.DuplicateIdException;
import edu.ijse.pos.exception.NullIdExcepton;
import edu.ijse.pos.exception.ResourceNotFoundException;
import edu.ijse.pos.repository.JobRepository;
import edu.ijse.pos.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.internal.bytebuddy.implementation.bytecode.Throw;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor

@Service
public class JobServiceImpl implements JobService {
    private final JobRepository repository;
   private final ModelMapper modelMapper;

    @Override
    public void saveJob( JobDto dto) throws DuplicateIdException {
        if (repository.existsById(dto.getId())){
            throw new DuplicateIdException("id already exist");
        }

        repository.save(modelMapper.map(dto,job.class));
    }

    @Override
    public void updatejob( JobDto dto,int id) throws NullIdExcepton {
        if (!repository.existsById(id)){
        throw new NullIdExcepton("id not exist");
        }
        repository.save(modelMapper.map(dto,job.class));
    }

    @Override
    public Page<JobDto> getAll(Pageable pageable) {
        Page<job> jobPage = repository.findAll(pageable); // Assuming you're using a JPA repo
        return jobPage.map(job -> modelMapper.map(job, JobDto.class));
    }

    @Override
    public void changeStatus( String id) {
        repository.changeStatusById(id);
    }

    @Override
    public JobDto findById(String id) throws ResourceNotFoundException {
        Optional<job> job = repository.findById(Integer.valueOf(id));
        if (job.isPresent()) {
            return modelMapper.map(job.get(), JobDto.class); // return a list with one item
        } else {
            throw new ResourceNotFoundException("resource not found");
        }
    }


    @Override
    public List<JobDto> findByKeyWord(String keyWord) {
        List<job> job = repository.findJobByTitleContainingIgnoreCase(keyWord);
        return modelMapper.map(job,new TypeToken<List<JobDto>>(){}.getType());
    }
    @Override
    public Page<JobDto> getAllPaginated(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAll(pageable).map(job -> modelMapper.map(job, JobDto.class));
    }



}
