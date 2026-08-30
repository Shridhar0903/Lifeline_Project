package com.lifeline.life_backend.repository;

import com.lifeline.life_backend.entity.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {
    List<BloodRequest> findByCityAndBloodGroup(String city, String bloodGroup);
}