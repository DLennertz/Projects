package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.HairColor;
import com.example.demo.repositories.HairColorRepository;

@Service
public class HairColorService {

	@Autowired HairColorRepository hairColorRepository;
	
	public HairColor findById(Integer id) {
		return hairColorRepository.findById(id).get();
	}
	
	public List<HairColor> findAll(){
		return hairColorRepository.findAll();
	}
	
	public HairColor createHairColor(HairColor hairColor) {
		return hairColorRepository.save(hairColor);
	}
	
	public boolean deleteById(Integer id) {
		try{ hairColorRepository.deleteById(id);}
		catch(Exception e){
			throw e;
		}
		return true;
	}

	public boolean exists(String name) {
		return hairColorRepository.existsHairColorByName(name);
	}

	public HairColor findByName(String name) {
		return hairColorRepository.findByName(name);
	}

	public HairColor updateHairColor(HairColor newHairColor) {
		HairColor mainHairColor = hairColorRepository.findById(newHairColor.getId()).get();
		
		mainHairColor = newHairColor;
		return hairColorRepository.save(mainHairColor);
	}
}
