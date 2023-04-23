package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Skin;
import com.example.demo.repositories.SkinRepository;

@Service
public class SkinService {

	@Autowired SkinRepository skinRepo;
	
	public Skin findById(Integer id) {
		return skinRepo.findById(id).get();
	}
	
	public List<Skin> findAll(){
		return skinRepo.findAll();
	}
	
	public boolean existsSkinByName(String name) {
		return skinRepo.existsSkinByName(name);
	}
	
	public Skin findSkinByName(String name) {
		return skinRepo.findSkinByName(name);
	}
	
	public Skin createSkin(Skin newSkin) {		
		return skinRepo.save(newSkin);
	}
	
	public Skin updateSkin(Skin newSkin) {
		Skin mainSkin = skinRepo.findById(newSkin.getId()).get();
		
		mainSkin = newSkin;
		
		return skinRepo.save(mainSkin);
	}
	
	public Boolean deleteByid(Integer id) {
		try { skinRepo.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		
		return true;
	}
}
