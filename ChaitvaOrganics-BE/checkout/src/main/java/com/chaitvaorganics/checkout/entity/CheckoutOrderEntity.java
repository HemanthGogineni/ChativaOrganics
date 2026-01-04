package com.chaitvaorganics.checkout.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "checkout_orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CheckoutOrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String phone;
    private String address;
    private String paymentMethod;
    private double totalAmount;

    private String screenshotPath;
    private boolean paymentVerified = false;

    private String orderStatus = "PENDING";

    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItemEntity> items = new ArrayList<>();
}
