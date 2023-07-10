package com.mdoroz.exTracker.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double price;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date boughtDate;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;


    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name + ", bought date=" + boughtDate + ", price=" + price + ", category id=" + category + "]";
    }
}
