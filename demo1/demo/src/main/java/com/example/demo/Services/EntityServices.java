package com.example.demo.Services;

import com.example.demo.Entity.EntityOfUser;
import com.example.demo.Repository.repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EntityServices {

    @Autowired
    private repo repo;

    public void save(EntityOfUser entityOfUser){
        repo.save(entityOfUser);
    }

    public List<EntityOfUser> findAll(){
        return repo.findAll();
    }

    public EntityOfUser findById(String username){
        if(repo.findById(username).isPresent()){
            return repo.findById(username).get();
        }
        else
            return null;
    }

    public void deleteAll(){
        repo.deleteAll();
    }

}
