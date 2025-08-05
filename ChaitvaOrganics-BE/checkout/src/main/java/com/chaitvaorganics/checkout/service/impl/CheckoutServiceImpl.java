package com.chaitvaorganics.checkout.service.impl;

import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.UPIDetailsDto;
import com.chaitvaorganics.checkout.entity.CheckoutOrderEntity;
import com.chaitvaorganics.checkout.entity.OrderItemEntity;
import com.chaitvaorganics.checkout.repository.CheckoutOrderRepository;
import com.chaitvaorganics.checkout.service.CheckoutService;
import com.chaitvaorganics.checkout.util.EmailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CheckoutServiceImpl implements CheckoutService {


    @Value("upi.id")
    private String upiId;

    @Value("upi.name")
    private String upiName;

    @Value("upi.currency")
    private String upiCurrency;

    @Autowired
    private CheckoutOrderRepository orderRepo;

    @Value("${upload.dir}")
    private String uploadDir;

    @Autowired
    EmailService emailService;

    @Override
    public UPIDetailsDto getUPIDetails(double amount) throws IOException {

        UPIDetailsDto upiDetailsDto = new UPIDetailsDto();
        upiDetailsDto.setQrImageBytes(generateImageString());
        upiDetailsDto.setUpiLink(generateUpiLink(amount));
        return upiDetailsDto;
    }


    @Override
    public CheckoutOrderEntity saveOrder(CheckoutRequestDto dto, MultipartFile screenshot) throws IOException {
        CheckoutOrderEntity order = new CheckoutOrderEntity();
        BeanUtils.copyProperties(dto, order);

        if (screenshot != null && !screenshot.isEmpty()) {
            String fileName = UUID.randomUUID() + "_" + screenshot.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            Files.write(filePath, screenshot.getBytes());
            order.setScreenshotPath(filePath.toString());
        }

        List<OrderItemEntity> itemEntities = dto.getItems().stream().map(item -> {
            OrderItemEntity entity = new OrderItemEntity();
            entity.setProductName(item.getName());
            entity.setPrice(item.getPrice());
            entity.setQuantity(item.getQuantity());
            entity.setOrder(order);
            return entity;
        }).toList();

        order.setItems(itemEntities);
        emailService.sendOrderConfirmationWithAttachment(dto, screenshot);
        return orderRepo.save(order);
    }

    private String generateUpiLink(double amount) {
        String pa = URLEncoder.encode(upiId, StandardCharsets.UTF_8);
        String pn = URLEncoder.encode(upiName, StandardCharsets.UTF_8);
        String am = URLEncoder.encode(String.format("%.2f", amount), StandardCharsets.UTF_8);
        String tn = URLEncoder.encode("Organic Order", StandardCharsets.UTF_8);
        String cu = URLEncoder.encode(upiCurrency, StandardCharsets.UTF_8);

        return String.format("upi://pay?pa=%s&pn=%s&am=%s&tn=%s&cu=%s", pa, pn, am, tn, cu);

    }

    private  String generateImageString() {
        try {
            ClassPathResource resource = new ClassPathResource("upi-img.jpeg");
            try (InputStream inputStream = resource.getInputStream()) {
                byte[] imageBytes = inputStream.readAllBytes();
                String base64 = Base64.getEncoder().encodeToString(imageBytes);
                return "data:image/png;base64," + base64;
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to load image: upi-img.jpeg", e);
        }
    }
}
