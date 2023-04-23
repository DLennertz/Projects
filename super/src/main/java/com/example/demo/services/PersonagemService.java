package com.example.demo.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controllers.EyeColorController;
import com.example.demo.controllers.HairColorController;
import com.example.demo.controllers.ItemController;
import com.example.demo.controllers.PhotoController;
import com.example.demo.controllers.PowerController;
import com.example.demo.controllers.RaceController;
import com.example.demo.controllers.SkinController;
import com.example.demo.controllers.UniverseController;
import com.example.demo.entities.Item;
import com.example.demo.entities.Personagem;
import com.example.demo.entities.Photo;
import com.example.demo.entities.Power;
import com.example.demo.entities.Race;
import com.example.demo.repositories.PersonagemRepository;

@Service
public class PersonagemService {

	@Autowired PersonagemRepository personagemRepository;
	@Autowired PowerController powerController;
	@Autowired RaceController raceController;
	@Autowired ItemController itemController;
	@Autowired HairColorController hairController;
	@Autowired EyeColorController eyeController;
	@Autowired UniverseController universeController;
	@Autowired PhotoController photoController;
	@Autowired SkinController skinController;
	
	public Personagem findById(Integer id) {
		return personagemRepository.findById(id).get();
	}
	
	public List<Personagem> findAll(){
		return personagemRepository.findAll();
	}
	
	public Boolean deleteById(Integer id) {
		try {personagemRepository.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		return true;
	}
	
	public Personagem createPersonagem(Personagem personagem) {
		
		List<Power> powerList = new ArrayList<>();
		List<Race> raceList = new ArrayList<>();
		List<Item> itemList = new ArrayList<>();
		
		personagem.setCreateDate(LocalDate.now());
		personagem.setLastModifiedTime(LocalDate.now());
		
		//Saving Powers
		for(Power power : personagem.getPower()) {
			if(!powerController.exists(power.getName()))
				powerList.add(powerController.findById(powerController.createPower(power).getBody().getId()).getBody());
			else
				powerList.add(powerController.findByName(power.getName()));
		}
		
		personagem.setPower(powerList);
		
		//Saving Races
		for(Race race : personagem.getRace()) {
			if(!raceController.exists(race.getName()))
				raceList.add(raceController.findById(raceController.createRace(race).getBody().getId()).getBody());
			else
				raceList.add(raceController.findByName(race.getName()));
		}
		
		personagem.setRace(raceList);
		
		//Saving Items
		for(Item item : personagem.getItem()) {
			if(!itemController.exists(item.getName()))
				itemList.add(itemController.findById(itemController.createItem(item).getBody().getId()).getBody());
			else
				itemList.add(itemController.findByName(item.getName()));
		}
		
		personagem.setItem(itemList);
		
		//Saving hair
		if(!hairController.exists(personagem.getHairColor().getName()))
			personagem.setHairColor(hairController.findById(hairController.createHairColor(personagem.getHairColor()).getBody().getId()).getBody());
		else
			personagem.setHairColor(hairController.findByName(personagem.getHairColor().getName()));
		
		//Saving eye
		if(!eyeController.exists(personagem.getEyeColor().getName()))
			personagem.setEyeColor(eyeController.findById(eyeController.createEyeColor(personagem.getEyeColor()).getBody().getId()).getBody());
		else
			personagem.setEyeColor(eyeController.findByName(personagem.getEyeColor().getName()));
		
		//Saving universe
		if(!universeController.exists(personagem.getUniverse().getName()))
			personagem.setUniverse(universeController.findById(universeController.createUniverse(personagem.getUniverse()).getBody().getId()).getBody());
		else
			personagem.setUniverse(universeController.findByName(personagem.getUniverse().getName()));
		
		//Saving skin
				if(!skinController.exists(personagem.getSkin().getName()))
					personagem.setSkin(skinController.findById(skinController.createSkin(personagem.getSkin()).getBody().getId()).getBody());
				else
					personagem.setSkin(skinController.findByName(personagem.getSkin().getName()));
		
		personagem = personagemRepository.save(personagem);
		
		//Saving Photos
				for(Photo photo : personagem.getPhotos()) {
					photo.setPersonagem(personagem);
					photoController.createPhoto(photo);
				}
		
		return personagemRepository.save(personagem);
	}

	public Personagem updatePersonagem(Personagem personagem) {
		
		if(personagem.getId()==null)
			return null;
			
		personagem.setLastModifiedTime(LocalDate.now());
		
		return personagemRepository.save(personagem);
	}

	public List<Personagem> findByUniverse(Integer universeId) {
		return personagemRepository.findPersonagemByUniverse(universeController.findById(universeId).getBody());
	}

	public List<Personagem> findByPower(Integer powerId) {
		return personagemRepository.findPersonagemByPowerOrRaceInOrItemIn(powerController.findById(powerId).getBody(),raceController.findByPower(powerId).getBody(),itemController.findByPower(powerId).getBody());
	}

	public List<Personagem> findByItem(Integer itemId) {
		return personagemRepository.findPersonagemByItem(itemController.findById(itemId).getBody());
	}

	public List<Personagem> findByHairColor(Integer hairId) {
		return personagemRepository.findByHairColor(hairController.findById(hairId).getBody());
	}

	public List<Personagem> findByEyeColor(Integer eyeId) {
		return personagemRepository.findByEyeColor(eyeController.findById(eyeId).getBody());
	}

	public Long count() {
		return personagemRepository.count();
	}
	
	
}
