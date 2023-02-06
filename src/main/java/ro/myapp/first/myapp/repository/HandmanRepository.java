package ro.myapp.first.myapp.repository;

import org.springframework.data.repository.CrudRepository;

import ro.myapp.first.myapp.Entity.Handman;

public interface HandmanRepository extends CrudRepository<Handman, Integer> {
    
}
