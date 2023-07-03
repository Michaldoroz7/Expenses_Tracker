package com.mdoroz.exTracker.repository;

import com.mdoroz.exTracker.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
