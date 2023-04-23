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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Item;
import com.example.demo.services.ItemService;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ItemController {

	@Autowired ItemService itemService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Item> findById(@PathVariable Integer id){
		return new ResponseEntity<Item>(itemService.findById(id),HttpStatus.OK);
	}
	
	@GetMapping("/byPower")
	public ResponseEntity<List<Item>> findByPower(@RequestParam(name="powerId") Integer powerId){
		return new ResponseEntity<List<Item>>(itemService.findByPowerId(powerId), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Item>> findAll(){
		return new ResponseEntity<List<Item>>(itemService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Item> createItem(@RequestPart(name="item") Item item){
		return new ResponseEntity<Item>(itemService.createItem(item), HttpStatus.CREATED);
	}
	
	@PutMapping("")
	public ResponseEntity<Item> updateItem(@RequestPart(name="item") Item item){
		return new ResponseEntity<Item>(itemService.updateItem(item), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteById(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(itemService.deleteById(id), HttpStatus.OK);
	}
	
	public Boolean exists(String name) {
		return itemService.exists(name);
	}

	public Item findByName(String name) {
		return itemService.findByName(name);
	}
}
