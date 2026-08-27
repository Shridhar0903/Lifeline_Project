package com.lifeline.life_backend.service;

import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.repository.UserRepository;

import java.util.List;

public class UserService {

    private UserRepository userRepository;

    public User registerUser (User user){
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists!");
        }
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
