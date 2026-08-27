package com.lifeline.life_backend.controller;

import com.lifeline.life_backend.entity.User;
import com.lifeline.life_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService  userService;

    // Post api = creating new user
    public ResponseEntity<User>registerUser(@RequestBody User user){
        User savedUser  = userService.registerUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);

    }
    //Get Api = to see All Users
    public ResponseEntity<List<User>>getAllUsers(){
        List<User>users=userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    
}
