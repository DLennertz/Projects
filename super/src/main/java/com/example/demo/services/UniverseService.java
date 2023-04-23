package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Universe;
import com.example.demo.repositories.UniverseRepository;

@Service
public class UniverseService {

	@Autowired UniverseRepository universeRepository;
	
	public Universe findById(Integer id) {
		return universeRepository.findById(id).get();
	}
	
	public List<Universe> findAll(){
		return universeRepository.findAll();
	}
	
	public Universe createUniverse(Universe universe) {
		return universeRepository.save(universe);
	}

	public boolean existsUniverseByName(String name) {
		return universeRepository.existsUniverseByName(name);
	}

	public Universe findByName(String name) {
		return universeRepository.findUniverseByName(name);
	}

	public Universe updateUniverse(Universe newUniverse) {
		Universe mainUniverse = universeRepository.findById(newUniverse.getId()).get();
		
		mainUniverse = newUniverse;
		return universeRepository.save(mainUniverse);
	}

	public Boolean deleteById(Integer id) {
		try {universeRepository.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		return true;
	}
}
