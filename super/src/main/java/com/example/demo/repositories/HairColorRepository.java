package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.HairColor;

public interface HairColorRepository extends JpaRepository<HairColor,Integer>{

	boolean existsHairColorByName(String name);

	HairColor findByName(String name);

}
