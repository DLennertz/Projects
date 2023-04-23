package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Power;
import com.example.demo.entities.Race;

public interface RaceRepository extends JpaRepository<Race,Integer> {

	List<Race> findByPower(Power power);

	Boolean existsRaceByName(String name);

	Race findByName(String name);

}
