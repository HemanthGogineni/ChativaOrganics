package com.chaitvaorganics.checkout.service;

import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.UPIDetailsDto;
import com.chaitvaorganics.checkout.entity.CheckoutOrderEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CheckoutService {
    UPIDetailsDto  getUPIDetails(double amount) throws IOException;

    CheckoutOrderEntity saveOrder(CheckoutRequestDto dto, MultipartFile file) throws IOException;
}
