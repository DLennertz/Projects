package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.EyeColor;
import com.example.demo.repositories.EyeColorRepository;

@Service
public class EyeColorService {

	@Autowired EyeColorRepository eyeColorRepository;
	
	public EyeColor findById(Integer id) {
		return eyeColorRepository.findById(id).get();
	}
	
	public List<EyeColor> findAll(){
		return eyeColorRepository.findAll();
	}
	
	public EyeColor createEyeColor(EyeColor eyeColor) {
		return eyeColorRepository.save(eyeColor);
	}

	public boolean existsEyeColorByName(String name) {
		return eyeColorRepository.existsEyeColorByName(name);
	}

	public EyeColor findEyeColorByName(String name) {
		return eyeColorRepository.findEyeColorByName(name);
	}

	public EyeColor updateEyeColor(EyeColor newEyeColor) {
		EyeColor mainEyeColor = eyeColorRepository.findById(newEyeColor.getId()).get();
		
		mainEyeColor = newEyeColor;
		return eyeColorRepository.save(mainEyeColor);
	}

	public Boolean deleteByid(Integer id) {
		try { eyeColorRepository.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		
		return true;
	}
}
