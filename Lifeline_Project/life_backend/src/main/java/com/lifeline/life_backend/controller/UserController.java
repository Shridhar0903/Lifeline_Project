package com.lifeline.life_backend.controller;

import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService  userService;

    // Post api = creating new user
    @PostMapping("/register")
    public ResponseEntity<User>registerUser(@RequestBody User user){
        User savedUser  = userService.registerUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);

    }
    //Get Api = to see All Users
    @GetMapping
    public ResponseEntity<List<User>>getAllUsers(){
        List<User>users=userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?>loginUser(@RequestBody com.lifeline.life_backend.dto.LoginRequest loginRequest){
        User user = userService.loginUser(loginRequest.getEmail(),loginRequest.getPassword());

        if (user != null) {
            return ResponseEntity.ok(user); // 200 OK + User Data
        } else {
            return ResponseEntity.status(401).body("Invalid Email or Password!"); // 401 Unauthorized
        }
    }

    // Availability Status बदलण्यासाठी API
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam boolean available) {
        User updatedUser = userService.updateAvailability(id, available);
        if (updatedUser != null) {
            return ResponseEntity.ok("Status updated successfully to: " + available);
        } else {
            return ResponseEntity.status(404).body("User not found!");
        }
    }

}
