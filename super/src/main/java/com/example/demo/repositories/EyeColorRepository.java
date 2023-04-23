package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.EyeColor;

public interface EyeColorRepository extends JpaRepository<EyeColor,Integer>{

	boolean existsEyeColorByName(String name);

	EyeColor findEyeColorByName(String name);

}
