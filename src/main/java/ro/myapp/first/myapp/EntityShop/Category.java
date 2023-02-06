package ro.myapp.first.myapp.EntityShop;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "Category")
public class Category {
    @Id
    @Column(name = "idCategory")
    private int idCategory;
    @Column(name = "nameCategory")
    private String nameCategory;
    public int getIdCategory() {
        return idCategory;
    }
    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }
    public String getNameCategory() {
        return nameCategory;
    }
    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }
}
