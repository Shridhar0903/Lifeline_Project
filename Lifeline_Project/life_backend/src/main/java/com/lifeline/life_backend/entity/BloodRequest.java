package com.lifeline.life_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "blood_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BloodRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private String bloodGroup;     // उदा. O+, A-
    private String city;           // उदा. Mumbai
    private Integer unitsRequired; // किती बॉटल्स/युनिट्स हवेत
    private String hospitalName;
    private String contactNumber;

    private String status = "PENDING"; // PENDING, FULFILLED

    private LocalDateTime createdAt = LocalDateTime.now();
}