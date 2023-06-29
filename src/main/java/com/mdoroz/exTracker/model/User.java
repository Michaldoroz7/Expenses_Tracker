package com.mdoroz.exTracker.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String password;
    private String email;
    private Double moneySpend;

    @OneToOne
    @JoinColumn(name = "accessType_id")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


}