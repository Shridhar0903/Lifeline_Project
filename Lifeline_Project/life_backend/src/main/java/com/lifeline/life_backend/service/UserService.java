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

    //Login Validation Logic
    public User loginUser(String email , String password){
        User user = userRepository.findByEmail(email).orElse(null);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;

    }
    // Availability Update करणे
    public User updateAvailability(Long userId, boolean isAvailable) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            user.setAvailable(isAvailable); // जर Entity मध्ये available असेल तर setAvailable लिहा
            return userRepository.save(user);
        }
        return null;
    }




}
