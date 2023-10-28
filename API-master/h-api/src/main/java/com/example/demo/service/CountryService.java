package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VO.CountryVO;
import com.example.demo.entities.Country;
import com.example.demo.repository.CountryRepository;

@Service
public class CountryService {

	@Autowired(required = false) CountryRepository countryRepository;
	
	public Country findById(Integer id) {
		Country country = countryRepository.findById(id).get();
		
		return country;
	}
	
	public List<CountryVO> findAll(){
		List<CountryVO> listCountryVO = new ArrayList<CountryVO>();
		countryRepository.findAll().stream().forEach((item) -> listCountryVO.add(this.convertCountryToCountryVO(item)));
		
		return listCountryVO;
	}
	
	private CountryVO convertCountryToCountryVO(Country country) {
		CountryVO countryVO = new CountryVO();
		
		countryVO.setIdCountry(country.getCountryId());
		countryVO.setNameCountry(country.getCountryName());
		
		return countryVO;
	}
}
