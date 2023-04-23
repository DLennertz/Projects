package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Power;

public interface PowerRepository extends JpaRepository<Power,Integer>{

	Boolean existsPowerByName(String name);

	Power findByName(String name);

}
