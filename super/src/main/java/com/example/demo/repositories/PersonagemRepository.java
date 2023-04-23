package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.EyeColor;
import com.example.demo.entities.HairColor;
import com.example.demo.entities.Item;
import com.example.demo.entities.Personagem;
import com.example.demo.entities.Power;
import com.example.demo.entities.Race;
import com.example.demo.entities.Universe;

public interface PersonagemRepository extends JpaRepository<Personagem,Integer>{

	List<Personagem> findPersonagemByUniverse(Universe body);

	List<Personagem> findPersonagemByPowerOrRaceInOrItemIn(Power body, List<Race> body2, List<Item> body3);

	List<Personagem> findPersonagemByItem(Item body);

	List<Personagem> findByHairColor(HairColor body);

	List<Personagem> findByEyeColor(EyeColor body);

}
 