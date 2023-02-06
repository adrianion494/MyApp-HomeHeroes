package ro.myapp.first.myapp.EntityShop;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Products")
public class Products {
    @Id
    @Column(name = "idProducts")
    private int idProducts;
    @Column(name = "nameProducts")
    private String nameProducts;
    @Column(name = "price")
    private int price;
    @Column(name="idCategory")
    private int idCategory;
    public int getIdProducts() {
        return idProducts;
    }
    public void setIdProducts(int idProducts) {
        this.idProducts = idProducts;
    }
    public String getNameProducts() {
        return nameProducts;
    }
    public void setNameProducts(String nameProducts) {
        this.nameProducts = nameProducts;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public int getIdCategory() {
        return idCategory;
    }
    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }
}
