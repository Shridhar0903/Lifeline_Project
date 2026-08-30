package com.lifeline.life_backend.repository;

import com.lifeline.life_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail (String email);

    //विशिष्ट शहर, ब्लड ग्रुप आणि Availability=true असलेले डोनर्स शोधणे
    List<User> findByCityAndBloodGroupAndIsAvailableTrue(String city, String bloodGroup);

    //फक्त शहरावरून डोनर्स शोधणे (पर्यायी)
    List<User> findByCity(String city);

    //  फक्त ब्लड ग्रुपनुसार डोनर्स शोधणे (पर्यायी)
    List<User> findByBloodGroup(String bloodGroup);
}

