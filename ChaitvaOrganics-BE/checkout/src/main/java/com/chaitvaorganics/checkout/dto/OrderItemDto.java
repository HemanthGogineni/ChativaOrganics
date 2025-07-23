package com.chaitvaorganics.checkout.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDto {
    private String productName;
    private double price;
    private int quantity;
}