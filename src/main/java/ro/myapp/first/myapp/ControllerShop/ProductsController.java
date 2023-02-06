package ro.myapp.first.myapp.ControllerShop;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ro.myapp.first.myapp.EntityShop.Products;
import ro.myapp.first.myapp.ServiceShop.ProductsService;

@RestController
public class ProductsController {
    @Autowired
    public ProductsService service;

    @CrossOrigin
    @PostMapping("/products/add")
    public String addSeries(@RequestBody Products s1){
       if (service.addSeries(s1)){
           return "succes";
       }
       
        return "failed";
    }

    @CrossOrigin
    @GetMapping("/products/getAll")
    public Iterable<Products> getAll(){
        return service.getAllProducts();
    }
    @CrossOrigin
    @GetMapping("products/getByCategory/{nameCategory}")
    public List<Products> getByCategoryName(@PathVariable(value ="nameCategory") String nameCategory){
        return service.getByCategoryName(nameCategory);
    }
}
