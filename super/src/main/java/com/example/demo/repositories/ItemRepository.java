package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Item;
import com.example.demo.entities.Power;


public interface ItemRepository extends JpaRepository<Item,Integer>{

	List<Item> findByPower(Power power);

	Boolean existsItemByName(String name);

	Item findByName(String name);

}
