package com.gshop.admin.setting;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.gshop.common.entity.Setting;
import com.gshop.common.entity.SettingCategory;

public interface SettingRepository extends CrudRepository<Setting, String> {
	public List<Setting> findByCategory(SettingCategory category);
}
