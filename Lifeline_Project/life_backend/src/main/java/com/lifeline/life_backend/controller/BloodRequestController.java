package com.lifeline.life_backend.controller;

import com.lifeline.life_backend.entity.BloodRequest;
import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.service.BloodRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class BloodRequestController {

    @Autowired
    private BloodRequestService bloodRequestService;

    // A. नवीन Blood Request तयार करणे
    @PostMapping
    public BloodRequest createRequest(@RequestBody BloodRequest request) {
        return bloodRequestService.createRequest(request);
    }

    // B. विशिष्ट शहर आणि ब्लड ग्रुपनुसार डोनर्स शोधणे
    @GetMapping("/search-donors")
    public List<User> searchDonors(@RequestParam String city, @RequestParam String bloodGroup) {
        return bloodRequestService.findMatchingDonors(city, bloodGroup);
    }

    // C. सर्व लहान-मोठ्या रिक्वेस्टची लिस्ट पाहणे
    @GetMapping
    public List<BloodRequest> getAllRequests() {
        return bloodRequestService.getAllRequests();
    }
}