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

import com.example.demo.entities.EyeColor;
import com.example.demo.services.EyeColorService;

@RestController
@RequestMapping("/eye")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EyeColorController {
	
	@Autowired EyeColorService eyeColorService;
	
	@GetMapping("/{id}")
	public ResponseEntity<EyeColor> findById(@PathVariable Integer id){
		return new ResponseEntity<EyeColor>(eyeColorService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<EyeColor>> findAll(){
		return new ResponseEntity<List<EyeColor>>(eyeColorService.findAll(),HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<EyeColor> createEyeColor(@RequestBody EyeColor eyeColor){
		return new ResponseEntity<EyeColor>(eyeColorService.createEyeColor(eyeColor), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<EyeColor> updateEyeColor(@RequestBody EyeColor eyeColor){
		return new ResponseEntity<EyeColor>(eyeColorService.updateEyeColor(eyeColor), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteById(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(eyeColorService.deleteByid(id),HttpStatus.OK);
	}

	public boolean exists(String name) {
		return eyeColorService.existsEyeColorByName(name);
	}

	public EyeColor findByName(String name) {
		return eyeColorService.findEyeColorByName(name);
	}

}
