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

import com.example.demo.entities.Power;
import com.example.demo.services.PowerService;

@RestController
@RequestMapping("/power")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PowerController {
	
	@Autowired PowerService powerService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Power> findById(@PathVariable Integer id) {
		return new ResponseEntity<Power>(powerService.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Power>> findAll(){
		return new ResponseEntity<List<Power>>(powerService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("") 
	public ResponseEntity<Power> createPower(@RequestBody Power power){
		return new ResponseEntity<Power>(powerService.createPower(power), HttpStatus.CREATED);
	}
	
	@PutMapping("") 
	public ResponseEntity<Power> updatePower(@RequestBody Power power){
		return new ResponseEntity<Power>(powerService.updatePower(power), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deletePower(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(powerService.deleteByid(id), HttpStatus.OK);
	}
	
	public Boolean exists(String name) {
		return powerService.exists(name);
	}

	public Power findByName(String name) {
		return powerService.findByNme(name);
	}

}
