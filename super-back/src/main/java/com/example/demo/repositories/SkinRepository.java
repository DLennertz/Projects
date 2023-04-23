package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Skin;

public interface SkinRepository extends JpaRepository<Skin,Integer> {

	boolean existsSkinByName(String name);

	Skin findSkinByName(String name);

}
