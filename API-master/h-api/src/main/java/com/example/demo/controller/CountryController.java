package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VO.CountryVO;
import com.example.demo.entities.Country;
import com.example.demo.service.CountryService;

@RestController
@RequestMapping("/country")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CountryController {
	
	@Autowired CountryService countryService;
	
	
	@GetMapping("/{id}")
	public Country findById(@PathVariable Integer id) {
		return countryService.findById(id);
	}
	
	@GetMapping("")
	public List<CountryVO> findAll() {
		return countryService.findAll();
	}

}
