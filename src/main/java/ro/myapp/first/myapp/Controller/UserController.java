package ro.myapp.first.myapp.Controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus.Series;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ro.myapp.first.myapp.Entity.User;
import ro.myapp.first.myapp.Service.UserService;


@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    

   

    @PostMapping("/user-register")
    @CrossOrigin
    public Map<String, Object> createUser(@RequestBody User u1) {

        if (service.registerUser(u1)) {
            return Collections.singletonMap("success", true);
        }

        return Collections.singletonMap("success", false);
    }
}
