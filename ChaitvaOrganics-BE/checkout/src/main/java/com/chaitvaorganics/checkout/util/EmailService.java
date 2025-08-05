package com.chaitvaorganics.checkout.util;
import com.chaitvaorganics.checkout.dto.CheckoutRequestDto;
import com.chaitvaorganics.checkout.dto.OrderItemDto;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendOrderConfirmationWithAttachment(CheckoutRequestDto request, MultipartFile attachment) {
        try {
            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setTo("hemanthgogineni485@gmail.com"); // ⬅ Change to your admin email
            helper.setSubject("🛒 New Order Received - " + request.getFullName());
            helper.setFrom("info@chaitvaorganics.com");

            String html = generateHtml(request);

            helper.setText(html, true); // true = is HTML

            if (attachment != null && !attachment.isEmpty()) {
                helper.addAttachment("TransactionScreenshot.jpg",
                        new ByteArrayResource(attachment.getBytes()));
            }

            mailSender.send(message);
        } catch (MessagingException | java.io.IOException e) {
            throw new RuntimeException("❌ Failed to send email", e);
        }
    }

    private String generateHtml(CheckoutRequestDto req) {
        return """
                <html>
                <body style="font-family: Arial, sans-serif;">
                    <h2>🛍️ New Order Details</h2>
                    <table style="border-collapse: collapse; width: 100%%;" border="1" cellpadding="8">
                        <tr><td><b>Full Name:</b></td><td>%s</td></tr>
                        <tr><td><b>Email:</b></td><td>%s</td></tr>
                        <tr><td><b>Phone:</b></td><td>%s</td></tr>
                        <tr><td><b>Address:</b></td><td>%s</td></tr>
                        <tr><td><b>Payment Method:</b></td><td>%s</td></tr>
                    </table>

                    <h3 style="margin-top: 30px;">🧾 Order Items</h3>
                    <table style="border-collapse: collapse; width: 100%%;" border="1" cellpadding="8">
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        %s
                    </table>

                    <p style="margin-top: 20px;">📎 Transaction screenshot is attached.</p>
                </body>
                </html>
                """.formatted(
                sanitize(req.getFullName()),
                sanitize(req.getEmail()),
                sanitize(req.getPhone()),
                sanitize(req.getAddress()),
                sanitize(req.getPaymentMethod()),
                generateItemsHtml(req.getItems())
        );
    }

    private String sanitize(String input) {
        return input != null ? input.replace("%", "%%") : "";

    }

    private String generateItemsHtml(List<OrderItemDto> items) {
        StringBuilder rows = new StringBuilder();
        for (OrderItemDto item : items) {
            rows.append(String.format(
                    "<tr><td>%s</td><td>%d</td><td>₹%.2f</td><td>₹%.2f</td></tr>",
                    sanitize(item.getName()),
                    item.getQuantity(),
                    item.getPrice(),
                    item.getPrice() * item.getQuantity()
            ));
        }
        return rows.toString();
    }

}

