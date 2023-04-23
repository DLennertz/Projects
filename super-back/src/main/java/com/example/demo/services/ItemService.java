package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controllers.PowerController;
import com.example.demo.entities.Item;
import com.example.demo.entities.Power;
import com.example.demo.repositories.ItemRepository;

@Service
public class ItemService {

	@Autowired ItemRepository itemRepository;
	@Autowired PowerController powerController;
	
	public Item findById(Integer id) {
		return itemRepository.findById(id).get();
	}
	
	public List<Item> findByPowerId(Integer powerId){
		return itemRepository.findByPower(powerController.findById(powerId).getBody());
	}
	
	public List<Item> findAll(){
		return itemRepository.findAll();
	}

	public Item createItem(Item item) {
		
		List<Power> powerList = new ArrayList<>();
		
		for(Power power: item.getPower()) {
			if(!powerController.exists(power.getName()))
				powerList.add(powerController.findById(powerController.createPower(power).getBody().getId()).getBody());
			else
				powerList.add(powerController.findByName(power.getName()));
		}
		
		item.setPower(powerList);
		
		return itemRepository.save(item);
	}

	public boolean exists(String name) {
		return itemRepository.existsItemByName(name);
	}

	public Item findByName(String name) {
		return itemRepository.findByName(name);
	}

	public Item updateItem(Item item) {
		
		Item mainItem = itemRepository.findById(item.getId()).get();
		List<Power> powerList = new ArrayList<>();
		
		for(Power power : item.getPower()) {
			if(!powerController.exists(power.getName()))
				powerList.add(powerController.findById(powerController.createPower(power).getBody().getId()).getBody());
			else
				powerList.add(powerController.findByName(power.getName()));
		}
		
		item.setPower(powerList);
		
		mainItem = item;
		return itemRepository.save(mainItem);
	}

	public Boolean deleteById(Integer id) {
		try {itemRepository.deleteById(id);}
		catch(Exception e) {
			throw e;
		}
		return true;
	}
}
