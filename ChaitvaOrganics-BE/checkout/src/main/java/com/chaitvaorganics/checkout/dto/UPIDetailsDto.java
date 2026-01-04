package com.chaitvaorganics.checkout.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UPIDetailsDto {

    private String qrImageBytes;
    private String upiLink;
}
