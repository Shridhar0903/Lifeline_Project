package com.lifeline.life_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="users")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true)
    private  String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String bloodGroup;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String pincode;

    private boolean isAvailable = true;


}
