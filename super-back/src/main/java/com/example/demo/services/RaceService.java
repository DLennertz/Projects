package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controllers.PowerController;
import com.example.demo.entities.Power;
import com.example.demo.entities.Race;
import com.example.demo.repositories.RaceRepository;

@Service
public class RaceService {

	@Autowired RaceRepository raceRepository;
	@Autowired PowerController powerController;
	
	public Race findById(Integer id) {
		return raceRepository.findById(id).get();
	}
	
	public List<Race> findByPowerId(Integer powerId){
		return raceRepository.findByPower(powerController.findById(powerId).getBody());
	}
	
	public List<Race> findAll(){
		return raceRepository.findAll();
	}

	public Race createRace(Race race) {
		
		List<Power> powerList = new ArrayList<>();
		
		if(race.getPower() != null) {
			for(Power power : race.getPower()) {
				if(!powerController.exists(power.getName()))
					powerList.add(powerController.findById(powerController.createPower(power).getBody().getId()).getBody());
				else
					powerList.add(powerController.findByName(power.getName()));
			}
		}
		race.setPower(powerList);
		
		return raceRepository.save(race);
	}


	public Boolean exists(String name) {
		return raceRepository.existsRaceByName(name);
	}

	public Race findByName(String name) {
		return raceRepository.findByName(name);
	}

	public Race updateRace(Race race) {

		Race mainRace = raceRepository.findById(race.getId()).get();
		List<Power> powerList = new ArrayList<>();
		
		for(Power power : race.getPower()) {
			if(!powerController.exists(power.getName()))
				powerList.add(powerController.findById(powerController.createPower(power).getBody().getId()).getBody());
			else
				powerList.add(powerController.findByName(power.getName()));
		}
		
		race.setPower(powerList);
		
		mainRace = race;
		return raceRepository.save(mainRace);
	}

	public Boolean deleteById(Integer id) {
		try{raceRepository.deleteById(id);}
		catch (Exception e) {
			throw e;
		
		}
		return true;
	}
}
