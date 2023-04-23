package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VO.PhotoVO;
import com.example.demo.service.PhotoService;

@RestController
@RequestMapping("/photo")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PhotoController {

	@Autowired PhotoService photoService;
	
	@GetMapping("/{id}")
	public PhotoVO getPhotoById(@PathVariable Integer id) {
		return photoService.getPhotoById(id);
	}
	
	@DeleteMapping("/{id}")
	public void deletePhoto(@PathVariable Integer id) {
		photoService.deletePhotoById(id);
	}
	
	@PostMapping("/save")
	public PhotoVO savePhoto(@RequestBody PhotoVO photoVO) {
		return photoService.savePhoto(photoVO);
	}
}
