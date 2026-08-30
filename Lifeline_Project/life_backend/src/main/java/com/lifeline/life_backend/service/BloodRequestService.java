package com.lifeline.life_backend.service;

import com.lifeline.life_backend.entity.BloodRequest;
import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.repository.BloodRequestRepository;
import com.lifeline.life_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodRequestService {

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    @Autowired
    private UserRepository userRepository;

    // १. नवीन रक्ताची रिक्वेस्ट सेव्ह करणे
    public BloodRequest createRequest(BloodRequest request) {
        return bloodRequestRepository.save(request);
    }

    // २. रिक्वेस्टनुसार जुळणारे उपलब्ध (isAvailable = true) डोनर्स शोधणे
    public List<User> findMatchingDonors(String city, String bloodGroup) {
        return userRepository.findByCityAndBloodGroupAndIsAvailableTrue(city, bloodGroup);
    }

    // ३. सर्व रिक्वेस्ट्स दाखवणे
    public List<BloodRequest> getAllRequests() {
        return bloodRequestRepository.findAll();
    }
}