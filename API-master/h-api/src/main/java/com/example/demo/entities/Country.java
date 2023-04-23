package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "country")
public class Country {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer countryId;
	
	@Column(name = "nome_pais")
	private String countryName;
	
	@Column(name = "sigla_pais")
	private String countryInitials;

	public Integer getCountryId() {
		return countryId;
	}

	public void setCountryId(Integer countryId) {
		this.countryId = countryId;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getCountryInitials() {
		return countryInitials;
	}

	public void setCountryInitials(String countryInitials) {
		this.countryInitials = countryInitials;
	}
	
	

}
