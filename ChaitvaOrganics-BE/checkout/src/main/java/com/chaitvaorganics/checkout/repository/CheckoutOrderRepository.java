package com.chaitvaorganics.checkout.repository;

import com.chaitvaorganics.checkout.entity.CheckoutOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutOrderRepository extends JpaRepository<CheckoutOrderEntity, Long> {
}
