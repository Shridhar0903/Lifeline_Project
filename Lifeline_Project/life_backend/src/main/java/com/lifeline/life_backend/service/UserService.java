package com.lifeline.life_backend.service;

import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
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

    // ID वरून 1 user मिळवण्यासाठी
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

}
