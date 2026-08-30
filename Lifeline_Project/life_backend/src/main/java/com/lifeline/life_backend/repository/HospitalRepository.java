package com.lifeline.life_backend.repository;

import com.lifeline.life_backend.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital,Long> {
    Optional<Hospital>findByEmail(String email);
}
