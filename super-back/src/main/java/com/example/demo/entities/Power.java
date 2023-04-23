package com.example.demo.entities;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "power")
public class Power {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "name", unique = true)
	private String name;
	
	@ManyToMany(mappedBy="power")
	@JsonIgnore
	private List<Race> raceList;
	
	@ManyToMany(mappedBy="power")
	@JsonIgnore
	private List<Item> itemList;
	
	@ManyToMany(mappedBy="power")
	@JsonIgnore
	private List<Personagem> personagemList;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Race> getRaceList() {
		return raceList;
	}

	public void setRaceList(List<Race> raceList) {
		this.raceList = raceList;
	}

	public List<Item> getItemList() {
		return itemList;
	}

	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}
	
	
}
