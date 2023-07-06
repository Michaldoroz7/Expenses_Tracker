package com.mdoroz.exTracker.controller;

import com.mdoroz.exTracker.DTO.LoginForm;
import com.mdoroz.exTracker.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginForm loginForm) {
        boolean authenticated = userService.authenticateUser(loginForm.getEmail(), loginForm.getPassword());
        if (authenticated) {
            String authToken = generateAuthToken(loginForm.getUsername());
            return ResponseEntity.ok(authToken);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    private String generateAuthToken(String name) {
        long expirationTimeMillis = System.currentTimeMillis() + 3600000; // 1 hour

        String token = Jwts.builder()
                .setSubject(name)
                .setIssuedAt(new Date())
                .setExpiration(new Date(expirationTimeMillis))
                .compact();

        return token;
    }
}


