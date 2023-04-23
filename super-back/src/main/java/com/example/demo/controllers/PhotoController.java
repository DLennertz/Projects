package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Photo;
import com.example.demo.services.PhotoService;

@RestController
@RequestMapping("/photo")
@CrossOrigin(origins="*", allowedHeaders="*")
public class PhotoController {

	@Autowired PhotoService photoService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Photo> findById(@PathVariable Integer id){
		return new ResponseEntity<Photo>(photoService.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Photo>> findAll(){
		return new ResponseEntity<List<Photo>>(photoService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<List<Photo>> createPhotoBatch(@RequestPart(name="photos") Map<String,List<Photo>> photos,@PathVariable(name="id") int personagemId){
		return new ResponseEntity<List<Photo>>(photoService.createPhotoBatch(photos,personagemId), HttpStatus.CREATED);
	}
	
	@PostMapping("")
	public ResponseEntity<Photo> createPhoto(@RequestPart(name="photo") Photo photo){
		return new ResponseEntity<Photo>(photoService.createPhoto(photo), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deletePhoto(@PathVariable Integer id){
		return new ResponseEntity<Boolean>(photoService.deleteById(id), HttpStatus.OK);
	}
	
	public Boolean exists(String path) {
		return photoService.exists(path);
	}
	
	public Photo findByPath(String path) {
		return photoService.findByPath(path);
	}
}
