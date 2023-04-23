package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VO.EyeColorVO;
import com.example.demo.service.EyeColorService;


@RestController
@RequestMapping("/eyecolor")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EyeColorController {
	
	@Autowired EyeColorService eyeColorService;
	
	
	@GetMapping("/{id}")
	public EyeColorVO findById(@PathVariable Integer id) {
		return eyeColorService.findById(id);
	}
	
	@GetMapping("")
	public List<EyeColorVO> findAll(){
		return eyeColorService.findAll();
	}
}