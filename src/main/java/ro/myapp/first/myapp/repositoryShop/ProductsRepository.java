package ro.myapp.first.myapp.repositoryShop;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ro.myapp.first.myapp.EntityShop.Products;

public interface ProductsRepository extends CrudRepository <Products, Integer> {
    @Query (value="SELECT*FROM Products p INNER JOIN Category c ON p.idCategory = c.idCategory WHERE nameCategory=?", nativeQuery = true)
    
    public List<Products> getProductByCategoryName(String nameCategory); 
}
