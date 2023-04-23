package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name="model")
public class Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer modelId;
	
	@Column(name="name")
	private String modelName;
	
	@Column(name="birthday")
	private Date modelBirthday;
	
	@Column(name ="height")
	private Integer modelHeight;
	
	@ManyToOne
	@JoinColumn(name="eye_color",referencedColumnName="id")
	private EyeColor modelEyeColor;
	
	@ManyToOne
	@JoinColumn(name="hair_color",referencedColumnName="id")
	private HairColor modelHairColor;
	
	@Column(name="bust")
	private Integer modelBust;
	
	@Column(name="waist")
	private Integer modelWaist;
	
	@Column(name="hips")
	private Integer modelHips;
	
	@Column(name="rating")
	private Double modelRating;
	
	@Column(name="boys")
	private Integer modelBoys;
	
	@Column(name="girls")
	private Integer modelGirls;
	
	@ManyToOne
	@JoinColumn(name="id_country", referencedColumnName="id")
	private Country modelCountry;
	
	@ManyToOne
	@JoinColumn(name="id_position", referencedColumnName="id")
	private Position modelPosition;
	
	@OneToMany(mappedBy="model")
	private List<Photo> photo;

	public Integer getModelId() {
		return modelId;
	}

	public void setModelId(Integer modelId) {
		this.modelId = modelId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public Date getModelBirthday() {
		return modelBirthday;
	}

	public void setModelBirthday(Date modelBirthday) {
		this.modelBirthday = modelBirthday;
	}

	public Integer getModelHeight() {
		return modelHeight;
	}

	public void setModelHeight(Integer modelHeight) {
		this.modelHeight = modelHeight;
	}

	public EyeColor getModelEyeColor() {
		return modelEyeColor;
	}

	public void setModelEyeColor(EyeColor modelEyeColor) {
		this.modelEyeColor = modelEyeColor;
	}

	public HairColor getModelHairColor() {
		return modelHairColor;
	}

	public void setModelHairColor(HairColor modelHairColor) {
		this.modelHairColor = modelHairColor;
	}

	public Integer getModelBust() {
		return modelBust;
	}

	public void setModelBust(Integer modelBust) {
		this.modelBust = modelBust;
	}

	public Integer getModelWaist() {
		return modelWaist;
	}

	public void setModelWaist(Integer modelWaist) {
		this.modelWaist = modelWaist;
	}

	public Integer getModelHips() {
		return modelHips;
	}

	public void setModelHips(Integer modelHips) {
		this.modelHips = modelHips;
	}

	public Double getModelRating() {
		return modelRating;
	}

	public void setModelRating(Double modelRating) {
		this.modelRating = modelRating;
	}

	public Integer getModelBoys() {
		return modelBoys;
	}

	public void setModelBoys(Integer modelBoys) {
		this.modelBoys = modelBoys;
	}

	public Integer getModelGirls() {
		return modelGirls;
	}

	public void setModelGirls(Integer modelGirls) {
		this.modelGirls = modelGirls;
	}

	public Country getModelCountry() {
		return modelCountry;
	}

	public void setModelCountry(Country modelCountry) {
		this.modelCountry = modelCountry;
	}

	public Position getModelPosition() {
		return modelPosition;
	}

	public void setModelPosition(Position modelPosition) {
		this.modelPosition = modelPosition;
	}

	public List<Photo> getPhoto() {
		return photo;
	}

	public void setPhoto(List<Photo> photo) {
		this.photo = photo;
	}

	
	
}
