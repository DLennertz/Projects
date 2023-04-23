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

import com.example.demo.entities.Skin;
import com.example.demo.services.SkinService;

@RestController
@RequestMapping("/skin")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SkinController {

	@Autowired SkinService skinService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Skin> findById(@PathVariable Integer id){
		return new ResponseEntity<Skin>(skinService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Skin>> findAll(){
		return new ResponseEntity<List<Skin>>(skinService.findAll(),HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Skin> createSkin(@RequestPart(name="skin")Skin skin){
		return new ResponseEntity<Skin>(skinService.createSkin(skin), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<Skin> updateSkin(@RequestPart(name="skin") Skin skin){
		return new ResponseEntity<Skin>(skinService.updateSkin(skin), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteById(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(skinService.deleteByid(id),HttpStatus.OK);
	}

	public boolean exists(String name) {
		return skinService.existsSkinByName(name);
	}

	public Skin findByName(String name) {
		return skinService.findSkinByName(name);
	}
}
