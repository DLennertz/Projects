package com.example.demo.entities;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity (name = "race")
public class Race {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "name", unique = true)
	@NotNull
	@NotBlank
	private String name;
	
	@ManyToMany
	@JoinTable(
			name = "race_power",
			joinColumns = @JoinColumn(name = "id_race"),
			inverseJoinColumns = @JoinColumn(name = "id_power"))
	private List<Power> power;

	@ManyToMany(mappedBy="race")
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

	public List<Power> getPower() {
		return power;
	}

	public void setPower(List<Power> power) {
		this.power = power;
	}
	
	
	
	
}
