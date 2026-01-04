package com.chaitvaorganics.checkout.controller;

import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.UPIDetailsDto;
import com.chaitvaorganics.checkout.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    @Autowired
    CheckoutService checkoutService;

    @GetMapping("/getPaymentDetails")
    public ResponseEntity<UPIDetailsDto> getUPIDetails(@RequestParam("amount") double amount) throws IOException {
        return ResponseEntity.ok(checkoutService.getUPIDetails(amount));
    }

    @PostMapping("/finalPayment")
    public ResponseEntity<Void> checkout(@RequestPart("checkout") CheckoutRequestDto requestDto,
                                                  @RequestPart("file") MultipartFile file) throws IOException {
        checkoutService.saveOrder(requestDto, file);
        return null;
    }
}
