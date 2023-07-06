package com.mdoroz.exTracker.repository;

import com.mdoroz.exTracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);
}
