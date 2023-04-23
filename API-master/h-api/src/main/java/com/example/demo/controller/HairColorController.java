package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VO.HairColorVO;
import com.example.demo.entities.HairColor;
import com.example.demo.service.HairColorService;

@RestController
@RequestMapping("/haircolor")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HairColorController {

	@Autowired HairColorService hairColorService;
		
	@GetMapping("/{id}")
	public HairColor findById(@PathVariable Integer id) {
		return hairColorService.findById(id);
	}
	
	@GetMapping("")
	public List<HairColorVO> findAll(){
		return hairColorService.findAll();
	}
}
