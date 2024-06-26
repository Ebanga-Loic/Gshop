package com.gshop.admin.setting.state;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.gshop.common.entity.Country;
import com.gshop.common.entity.State;

public interface StateRepository extends CrudRepository<State, Integer> {
	
	public List<State> findByCountryOrderByNameAsc(Country country);
}
