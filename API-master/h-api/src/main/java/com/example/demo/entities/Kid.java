package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity(name = "kid")
public class Kid {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer KidId;
	
	@Column(name="name")
	private String KidName;
	
	@ManyToOne
	@JoinColumn(name="id_model",referencedColumnName="id")
	private Model KidMother;
	
	@ManyToOne
	@JoinColumn(name="eye_color", referencedColumnName="id")
	private EyeColor KidEyeColor;
	
	@ManyToOne
	@JoinColumn(name="hair_color", referencedColumnName="id")
	private HairColor KidHairColor;
	
	@Column(name="name_meaning")
	private String KidNameMeaning;
	
	@Column(name="name_origin")
	private String KidNameOrigin;
	

	public Integer getKidId() {
		return KidId;
	}

	public void setKidId(Integer kidId) {
		KidId = kidId;
	}

	public String getKidName() {
		return KidName;
	}

	public void setKidName(String kidName) {
		KidName = kidName;
	}

	public EyeColor getKidEyeColor() {
		return KidEyeColor;
	}

	public void setKidEyeColor(EyeColor kidEyeColor) {
		KidEyeColor = kidEyeColor;
	}
	
	public HairColor getKidHairColor() {
		return KidHairColor;
	}

	public void setKidHairColor(HairColor kidHairColor) {
		KidHairColor = kidHairColor;
	}

	public String getKidNameMeaning() {
		return KidNameMeaning;
	}

	public void setKidNameMeaning(String kidNameMeaning) {
		KidNameMeaning = kidNameMeaning;
	}

	public String getKidNameOrigin() {
		return KidNameOrigin;
	}

	public void setKidNameOrigin(String kidNameOrigin) {
		KidNameOrigin = kidNameOrigin;
	}

	public Model getKidMother() {
		return KidMother;
	}

	public void setKidMother(Model kidMother) {
		KidMother = kidMother;
	}
	
	

}
