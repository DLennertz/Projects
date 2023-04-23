package com.example.demo.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;

@Entity (name = "personagem")
public class Personagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "height")
	private Integer height;
	
	@Column(name="alias")
	private String alias;
	
	@Column(name="tier")
	private Integer tier;
	
	@Column(name="body")
	private String body;
	
	@Column(name="perfil")
	private String perfil;
	
	@Column(name = "date_created")
	private LocalDate createDate;
	
	@Column(name = "date_updated")
	private LocalDate lastModifiedTime;
	
	@ManyToMany
	@JoinTable(
			name = "personagem_power",
			joinColumns = @JoinColumn(name = "id_personagem"),
			inverseJoinColumns = @JoinColumn(name = "id_power"))
	private List<Power> power;
	
	@ManyToMany
	@JoinTable(
			name = "personagem_race",
			joinColumns = @JoinColumn(name = "id_personagem"),
			inverseJoinColumns = @JoinColumn(name = "id_race"))
	private List<Race> race;
	
	@ManyToMany
	@JoinTable(
			name = "personagem_item",
			joinColumns = @JoinColumn(name = "id_personagem"),
			inverseJoinColumns = @JoinColumn(name = "id_item"))
	private List<Item> item;
	
	@ManyToOne
	private HairColor hairColor;
	
	@ManyToOne
	private EyeColor eyeColor;
	
	@ManyToOne
	private Universe universe;
	
	@ManyToOne
	private Skin skin;
	
	@OneToMany(mappedBy="personagem")
	private List<Photo> photos;
	

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


	public Integer getHeight() {
		return height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}


	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	public HairColor getHairColor() {
		return hairColor;
	}

	public void setHairColor(HairColor hairColor) {
		this.hairColor = hairColor;
	}

	public EyeColor getEyeColor() {
		return eyeColor;
	}

	public void setEyeColor(EyeColor eyeColor) {
		this.eyeColor = eyeColor;
	}

	public Universe getUniverse() {
		return universe;
	}

	public void setUniverse(Universe universe) {
		this.universe = universe;
	}

	public List<Power> getPower() {
		return power;
	}

	public void setPower(List<Power> power) {
		this.power = power;
	}

	public List<Race> getRace() {
		return race;
	}

	public void setRace(List<Race> race) {
		this.race = race;
	}

	public List<Item> getItem() {
		return item;
	}

	public void setItem(List<Item> item) {
		this.item = item;
	}

	public LocalDate getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDate localDate) {
		this.createDate = localDate;
	}

	public LocalDate getLastModifiedTime() {
		return lastModifiedTime;
	}

	public void setLastModifiedTime(LocalDate lastModifiedTime) {
		this.lastModifiedTime = lastModifiedTime;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getPerfil() {
		return perfil;
	}

	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}

	public Integer getTier() {
		return tier;
	}

	public void setTier(Integer tier) {
		this.tier = tier;
	}

	public Skin getSkin() {
		return skin;
	}

	public void setSkin(Skin skin) {
		this.skin = skin;
	}

	
}
