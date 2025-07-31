package edu.ijse.pos.controller;

import edu.ijse.pos.dto.JobDto;
import edu.ijse.pos.exception.DuplicateIdException;
import edu.ijse.pos.exception.NullIdExcepton;
import edu.ijse.pos.exception.ResourceNotFoundException;
import edu.ijse.pos.service.JobService;
import edu.ijse.pos.utill.APIResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("app/v1/job")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // ✅ Allows frontend from any port
@Slf4j
public class JobController {

    private final JobService service;

    @PostMapping("/create")
    public ResponseEntity<APIResponse> createJob(@Valid @RequestBody JobDto dto) throws DuplicateIdException {
        log.info("Creating job with title: {}", dto.getTitle());
        log.info("Job details: {}", dto);
        log.info("Job description length: {}", dto.getDescription() != null ? dto.getDescription().length() : "No description provided");
        if (dto.getDescription() != null && dto.getDescription().length() < 10) {
            log.warn("Job description is too short: {}", dto.getDescription());
            throw new IllegalArgumentException("Job description must be at least 10 characters long");
        }
        log.info("Job description is valid");
        log.debug("Job DTO: {}", dto);
        log.trace("Creating job with details: {}", dto);

        service.saveJob(dto);
        return ResponseEntity.ok(new APIResponse(200, "Job created successfully", null));
    }

    @PutMapping("/{id}")
    public ResponseEntity<APIResponse> updateJob(@Valid @PathVariable Integer id, @RequestBody JobDto dto) throws NullIdExcepton {
        service.updatejob(dto, id);
        return ResponseEntity.ok(new APIResponse(200, "Job updated successfully", null));
    }

    @GetMapping
    public ResponseEntity<APIResponse> getAll(@RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page,size);
        Page<JobDto> jobPage = service.getAll(pageable);
        return ResponseEntity.ok(new APIResponse(200, "Success", jobPage));
    }


    @PatchMapping("/status/{id}")
    public ResponseEntity<APIResponse> changeStatus(@Valid @PathVariable String id) {
        service.changeStatus(id);
        return ResponseEntity.ok(new APIResponse(200, "Job status updated successfully", null));
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<APIResponse> findById(@Valid @PathVariable String id) throws ResourceNotFoundException {
        JobDto job = service.findById(id); // ✅ Expect one job, not a list
        return ResponseEntity.ok(new APIResponse(200, "Success", job));
    }

    @GetMapping("/search2/{keyword}")
    public ResponseEntity<APIResponse> findByKeyWord(@Valid @PathVariable String keyword) {
        List<JobDto> result = service.findByKeyWord(keyword);
        return ResponseEntity.ok(new APIResponse(200, "Filtered jobs by keyword", result));
    }

}
