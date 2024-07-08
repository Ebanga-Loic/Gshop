package com.gshop.setting;

import org.springframework.data.repository.CrudRepository;

import com.gshop.common.entity.Currency;

public interface CurrencyRepository extends CrudRepository<Currency, Integer> {

}
