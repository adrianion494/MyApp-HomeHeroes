package ro.myapp.first.myapp.repository;


import org.springframework.data.repository.CrudRepository;


import ro.myapp.first.myapp.Entity.User;


public interface UserRepository extends CrudRepository<User, Integer> {
    
}
