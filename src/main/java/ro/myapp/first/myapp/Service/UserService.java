package ro.myapp.first.myapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ro.myapp.first.myapp.Entity.User;
import ro.myapp.first.myapp.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /* 
    public boolean createUser(User u1){
        userRepository.save(u1);
        return true;
    }

    public User getUser(int id){
        return userRepository.findById(id).get();
    }
    */

    public boolean registerUser(User u1){
        User saved=userRepository.save(u1);
        if(saved.getUserId()>0 && u1.getFirstName()!="" && u1.getLastName()!="" && u1.getEmail()!=""&& u1.getPassword()!=""){
            return true;
        }
        return false;
    }

    
    
}





