package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Kid;
import com.example.demo.repository.KidRepository;

@Service
public class KidService {

	@Autowired(required = false) KidRepository kidRepository;
	
	public Kid findById(Integer id) {
		return kidRepository.findById(id).get();
	}
}
