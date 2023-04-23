package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Photo;
import com.example.demo.repositories.PersonagemRepository;
import com.example.demo.repositories.PhotoRepository;

@Service
public class PhotoService {

	@Autowired PhotoRepository photoRepo;
	@Autowired PersonagemRepository perRepo;
	
	public Photo findById(Integer id) {
		return photoRepo.findById(id).get();
	}
	
	public List<Photo> findAll(){
		return photoRepo.findAll();
	}
	
	public Photo createPhoto(Photo photo) {
		return photoRepo.save(photo);
	}
	
	public Boolean exists(String path) {
		return photoRepo.existsPhotoByPath(path);
	}
	
	public Photo findByPath(String path) {
		return photoRepo.findByPath(path);
	}
	
	public Boolean deleteById(Integer id) {
		try {photoRepo.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		return true;
	}

	public List<Photo> createPhotoBatch(Map<String,List<Photo>> photos,int personagemId) {
		
		List<Photo> photoList = new ArrayList<>();
		
		for (Entry<String, List<Photo>> me : photos.entrySet()) {
			  
			  List<Photo> valueList = me.getValue();
			  for (Photo s : valueList) {
				  s.setPersonagem(perRepo.findById(personagemId).get());
				  photoList.add(photoRepo.save(s));
				  
			  }
			}
		
		
		return photoList;
	}
}
