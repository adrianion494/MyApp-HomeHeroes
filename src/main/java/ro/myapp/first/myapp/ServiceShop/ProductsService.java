package ro.myapp.first.myapp.ServiceShop;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ro.myapp.first.myapp.EntityShop.Products;
import ro.myapp.first.myapp.repositoryShop.ProductsRepository;

@Service
public class ProductsService {
    @Autowired
    public ProductsRepository repo;

    public boolean addSeries(Products s1){
        Products saved= repo.save(s1);
        if (saved!=null){
            return true;
        }

        return false;
    }

    public Iterable<Products>getAllProducts(){
        return repo.findAll();
    }

    public List<Products> getByCategoryName ( String nameCategory){
        return repo.getProductByCategoryName(nameCategory);
    }
}
