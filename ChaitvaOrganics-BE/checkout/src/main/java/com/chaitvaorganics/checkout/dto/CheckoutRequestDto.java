package com.chaitvaorganics.checkout.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class CheckoutRequestDto {
    private String fullName;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String postalCode;

    private String paymentMethod;
    private String upiReferenceId;
    private double totalAmount;
    private List<OrderItemDto> items;

}

