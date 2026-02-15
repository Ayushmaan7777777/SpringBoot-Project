package com.example.demo.Controller;
import com.example.demo.Entity.EntityOfUser;
import com.example.demo.Services.EntityServices;
import org.jspecify.annotations.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@RestController
//public class EntityController {
//    private Map<Integer, EntityOfUser> userDetails = new HashMap<>();
//
//    @PostMapping("/save")
//    public boolean saveUserDetail(@RequestParam Integer userId, @RequestBody EntityOfUser user) {
//        this.userDetails.put(userId, user);
//        return true;
//    }
//}
@RestController
@RequestMapping("/newdb")
@CrossOrigin
public class EntityController {

    @Autowired
    private EntityServices entityServices;

    @GetMapping("/ok")
    public String ok(){
        return "this is working";
    }

    @GetMapping("/getall")
    public List<EntityOfUser> getAll(){
        return entityServices.findAll();
    }

    @GetMapping("/get/{userName}")
    public EntityOfUser getById(@PathVariable String userName){
        return entityServices.findById(userName);
    }

    @PostMapping("/login")
    public boolean findIfExist(@RequestBody @NonNull EntityOfUser entityOfUser){
        String userName = entityOfUser.getUserName();
        String password = entityOfUser.getPassword();
        if(entityServices.findById(userName) != null && entityServices.findById(userName).getPassword().equals(password)) {
               System.out.print("you login successfully");
               return true;
        }
        System.out.print("you login failed");
        return false;
    }

    @PostMapping("/register")
    public boolean saveUser(@RequestBody EntityOfUser entityOfUser) {
        entityServices.save(entityOfUser);
        return true;
    }

    @DeleteMapping
    public boolean deleteUser() {
        entityServices.deleteAll();
        return true;
    }
}