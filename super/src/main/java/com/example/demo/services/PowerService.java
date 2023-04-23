package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Power;
import com.example.demo.repositories.PowerRepository;

@Service
public class PowerService {

	@Autowired PowerRepository powerRepository;
	
	public Power findById(Integer id) {
		return powerRepository.findById(id).get();
	}
	
	public List<Power> findAll(){
		return powerRepository.findAll();
	}

	public Power createPower(Power power) {
		return powerRepository.save(power);
	}

	public Boolean exists(String name) {
		return powerRepository.existsPowerByName(name);
	}

	public Power findByNme(String name) {
		return powerRepository.findByName(name);
	}

	public Power updatePower(Power newPower) {
		Power mainPower = powerRepository.findById(newPower.getId()).get();
		mainPower = newPower;
		return powerRepository.save(mainPower);
	}

	public Boolean deleteByid(Integer id) {
		try {powerRepository.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		return true;
	}
}
