package com.chaitvaorganics.checkout.controller;

import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.UPIDetailsDto;
import com.chaitvaorganics.checkout.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController("/checkout")
public class CheckoutController {

    @Autowired
    CheckoutService checkoutService;

    @GetMapping("/getPaymentDetails")
    public ResponseEntity<UPIDetailsDto> getUPIDetails(@RequestBody
                                                       double amount) throws IOException {
        return ResponseEntity.ok(checkoutService.getUPIDetails(amount));
    }

    @PostMapping()
    public ResponseEntity<UPIDetailsDto> checkout(@RequestBody CheckoutRequestDto checkoutRequestDto
                                                  ) throws IOException {

        return null;
    }


}
