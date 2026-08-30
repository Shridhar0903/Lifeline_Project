package com.lifeline.life_backend.controller;

import com.lifeline.life_backend.entity.Hospital;
import com.lifeline.life_backend.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @PostMapping("/register")
    public Hospital registerHospital(@RequestBody Hospital hospital) {
        return hospitalService.registerHospital(hospital);
    }

    @GetMapping
    public List<Hospital> getAllHospitals() {
        return hospitalService.getAllHospitals();
    }
}