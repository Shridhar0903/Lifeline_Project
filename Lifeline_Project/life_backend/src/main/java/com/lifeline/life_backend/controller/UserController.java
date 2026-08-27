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

}
