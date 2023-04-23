package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Universe;

public interface UniverseRepository extends JpaRepository<Universe,Integer>{

	boolean existsUniverseByName(String name);

	Universe findUniverseByName(String name);

}
