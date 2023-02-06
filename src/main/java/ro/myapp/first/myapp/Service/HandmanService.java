package ro.myapp.first.myapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ro.myapp.first.myapp.Entity.Handman;
import ro.myapp.first.myapp.repository.HandmanRepository;

@Service
public class HandmanService {
    
    @Autowired
    private HandmanRepository handmanRepository;

    public boolean registerHandman(Handman h1){
        Handman saved=handmanRepository.save(h1);
        if(saved.getUserId()>0 && h1.getFirstName()!="" && h1.getLastName()!="" && h1.getEmail()!=""&& h1.getPassword()!=""&&h1.getOccupation()!=""){
            return true;
        }
        return false;
    }
}
