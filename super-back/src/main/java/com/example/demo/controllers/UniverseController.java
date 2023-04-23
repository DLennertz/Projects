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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Universe;
import com.example.demo.services.UniverseService;

@RestController
@RequestMapping("/universe")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UniverseController {
	
	@Autowired UniverseService universeService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Universe> findById(@PathVariable Integer id){
		return new ResponseEntity<Universe>(universeService.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Universe>> findAll(){
		return new ResponseEntity<List<Universe>>(universeService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Universe> createUniverse(@RequestPart(name="universe") Universe universe){
		return new ResponseEntity<Universe>(universeService.createUniverse(universe), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<Universe> updateUniverse(@RequestPart(name="universe") Universe universe){
		return new ResponseEntity<Universe>(universeService.updateUniverse(universe), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteByid(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(universeService.deleteById(id), HttpStatus.OK);
	}

	public boolean exists(String name) {
		return universeService.existsUniverseByName(name);
	}

	public Universe findByName(String name) {
		return universeService.findByName(name);
	}
}
