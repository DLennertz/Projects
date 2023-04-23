package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "hair_color")
public class HairColor {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id")
	private Integer hairColorId;
	
	@Column(name="nome")
	private String hairColorName;

	public Integer getHairColorId() {
		return hairColorId;
	}

	public void setHairColorId(Integer hairColorId) {
		this.hairColorId = hairColorId;
	}

	public String getHairColorName() {
		return hairColorName;
	}

	public void setHairColorName(String hairColorName) {
		this.hairColorName = hairColorName;
	}
	
	
}
