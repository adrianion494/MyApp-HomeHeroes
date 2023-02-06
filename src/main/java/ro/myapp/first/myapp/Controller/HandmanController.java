package ro.myapp.first.myapp.Controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ro.myapp.first.myapp.Entity.Handman;
import ro.myapp.first.myapp.Service.HandmanService;

@RestController
public class HandmanController {

    @Autowired
    private HandmanService service;

    @PostMapping("/handman-register")
    @CrossOrigin
    public Map<String, Object> createUser(@RequestBody Handman h1) {

        if (service.registerHandman(h1)) {
            return Collections.singletonMap("success", true);
        }

        return Collections.singletonMap("success", false);
    }
}
