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

import com.example.demo.entities.Personagem;
import com.example.demo.services.PersonagemService;

@RestController
@RequestMapping("/personagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PersonagemController {
	
	@Autowired PersonagemService personagemService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Personagem> findById(@PathVariable Integer id){
		return new ResponseEntity<Personagem>(personagemService.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("/count")
	public ResponseEntity<Long> count(){
		return new ResponseEntity<Long>(personagemService.count(),HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Personagem>> findAll(){
		return new ResponseEntity<List<Personagem>>(personagemService.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/byUniverse")
	public ResponseEntity<List<Personagem>> findByUniverse(@RequestParam(name = "universeId") Integer universeId){
		return new ResponseEntity<List<Personagem>>(personagemService.findByUniverse(universeId), HttpStatus.OK);
	}
	
	@GetMapping("/byPower")
	public ResponseEntity<List<Personagem>> findByPower(@RequestParam(name = "powerId") Integer powerId){
		return new ResponseEntity<List<Personagem>>(personagemService.findByPower(powerId), HttpStatus.OK);
	}
	
	@GetMapping("/byItem")
	public ResponseEntity<List<Personagem>> findByItem(@RequestParam(name = "itemId") Integer itemId){
		return new ResponseEntity<List<Personagem>>(personagemService.findByItem(itemId), HttpStatus.OK);
	}
	
	@GetMapping("/byHair")
	public ResponseEntity<List<Personagem>> findByHairColor(@RequestParam(name = "hairId") Integer hairId){
		return new ResponseEntity<List<Personagem>>(personagemService.findByHairColor(hairId), HttpStatus.OK);
	}
	
	@GetMapping("/byEye")
	public ResponseEntity<List<Personagem>> findByEyeColor(@RequestParam(name = "eyeId") Integer eyeId){
		return new ResponseEntity<List<Personagem>>(personagemService.findByEyeColor(eyeId), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Personagem> createPersonagem(@RequestBody Personagem personagem){
		return new ResponseEntity<Personagem>(personagemService.createPersonagem(personagem), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<Personagem> updatePersonagem(@RequestBody Personagem personagem){
		return new ResponseEntity<Personagem>(personagemService.updatePersonagem(personagem), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteById(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(personagemService.deleteById(id), HttpStatus.OK);
	}
}
