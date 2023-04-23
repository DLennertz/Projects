package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "eye_color")
public class EyeColor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer eyeColorId;
	
	@Column(name = "nome")
	private String eyeColorName;

	public Integer getEyColorId() {
		return eyeColorId;
	}

	public void setEyColorId(Integer eyColorId) {
		this.eyeColorId = eyColorId;
	}

	public String getEyeColorName() {
		return eyeColorName;
	}

	public void setEyeColorName(String eyeColorName) {
		this.eyeColorName = eyeColorName;
	}
	
	
}
