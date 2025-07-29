package com.chaitvaorganics.checkout.controller;

import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.UPIDetailsDto;
import com.chaitvaorganics.checkout.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController("/checkout")
public class CheckoutController {

    @Autowired
    CheckoutService checkoutService;

    @GetMapping("/getPaymentDetails")
    public ResponseEntity<UPIDetailsDto> getUPIDetails(@RequestParam("amount")
                                                       double amount) throws IOException {
        return ResponseEntity.ok(checkoutService.getUPIDetails(amount));
    }

    @PostMapping()
    public ResponseEntity<UPIDetailsDto> checkout(@RequestBody CheckoutRequestDto checkoutRequestDto
                                                  ) throws IOException {

        return null;
    }


}
