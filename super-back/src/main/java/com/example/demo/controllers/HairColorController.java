package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.HairColor;
import com.example.demo.services.HairColorService;

@RestController
@RequestMapping("/hair")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HairColorController {
	
	@Autowired HairColorService hairColorService;
	
	@GetMapping("/{id}")
	public ResponseEntity<HairColor> findById(@PathVariable Integer id){
		return new ResponseEntity<HairColor>(hairColorService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<HairColor>> findAll(){
		return new ResponseEntity<List<HairColor>>(hairColorService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<HairColor> createHairColor(@RequestBody HairColor hairColor){
		return new ResponseEntity<HairColor>(hairColorService.createHairColor(hairColor), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<HairColor> update(@RequestBody HairColor hairColor){
		return new ResponseEntity<HairColor>(hairColorService.updateHairColor(hairColor), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteById(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(hairColorService.deleteById(id), HttpStatus.OK);
	}

	public boolean exists(String name) {
		return hairColorService.exists(name);
	}

	public HairColor findByName(String name) {
		return hairColorService.findByName(name);
	}

}
