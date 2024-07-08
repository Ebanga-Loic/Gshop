package com.gshop.shipping;

import org.springframework.data.repository.CrudRepository;

import com.gshop.common.entity.Country;
import com.gshop.common.entity.ShippingRate;

public interface ShippingRateRepository extends CrudRepository<ShippingRate, Integer> {
	
	public ShippingRate findByCountryAndState(Country country, String state);
}
