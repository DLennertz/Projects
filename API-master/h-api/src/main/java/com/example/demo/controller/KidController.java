package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Kid;
import com.example.demo.service.KidService;

@RestController
@RequestMapping("/kid")
@CrossOrigin(origins = "http://localhost:3000")
public class KidController {

	@Autowired KidService kidService;
	
	@GetMapping("/{id}")
	public Kid findById(@PathVariable Integer id) {
		return kidService.findById(id);
	}
}
