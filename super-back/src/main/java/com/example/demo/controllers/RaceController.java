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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Race;
import com.example.demo.services.RaceService;

@RestController
@RequestMapping("/race")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RaceController {
	
	@Autowired RaceService raceService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Race> findById(@PathVariable Integer id) {
		return new ResponseEntity<Race>(raceService.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("/byPower")
	public ResponseEntity<List<Race>> findByPower(@RequestParam(name="powerId") Integer powerId){
		return new ResponseEntity<List<Race>>(raceService.findByPowerId(powerId), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Race>> findAll(){
		return new ResponseEntity<List<Race>>(raceService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Race> createRace(@RequestBody Race race){
		return new ResponseEntity<Race>(raceService.createRace(race), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<Race> updateRace(@RequestBody Race race){
		return new ResponseEntity<Race>(raceService.updateRace(race), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteRace(@PathVariable Integer id){
		return new ResponseEntity<Boolean> (raceService.deleteById(id), HttpStatus.OK);
	}
	public Boolean exists(String name) {
		return raceService.exists(name);
	}
	
	public Race findByName(String name) {
		return raceService.findByName(name);
	}

}
