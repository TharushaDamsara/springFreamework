package edu.ijse.pos.repository;

import edu.ijse.pos.entity.job;
import jakarta.transaction.Transactional;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<job,Integer> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE job SET type = 'Deactivate' WHERE id = ?", nativeQuery = true)
    void changeStatusById(String id);
    List<job> findJobByTitleContainingIgnoreCase(String keyword);



}
