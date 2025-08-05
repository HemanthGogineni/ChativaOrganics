package com.chaitvaorganics.checkout.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDto {
    private String category;
    private String id;
    private String image;
    private String name;
    private double price;
    private int quantity;
}