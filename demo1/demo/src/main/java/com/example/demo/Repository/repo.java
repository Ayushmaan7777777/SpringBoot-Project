package com.example.demo.Repository;

import com.example.demo.Entity.EntityOfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repo extends JpaRepository<EntityOfUser, String> {

}
