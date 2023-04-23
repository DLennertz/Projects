package com.example.demo.VO;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ModelVO {
	
	private String nomeCompleto;
	private Date dataNascimento;
	private String country;
	private Integer height;
	private String eyeColor;
	private String hairColor;
	private Integer bust;
	private Integer waist;
	private Integer hips;
	private Double rating;
	private Integer boys;
	private Integer girls;
	private List<PhotoVO> photos;
	private Integer idCountry;
	private Integer idHairColor;
	private Integer idEyeColor;
	private Integer id;
	
	public ModelVO() {
		this.photos = new ArrayList<PhotoVO>();
	}
	
	public String getNomeCompleto() {
		return nomeCompleto;
	}
	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
	public Date getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Integer getHeight() {
		return height;
	}
	public void setHeight(Integer height) {
		this.height = height;
	}
	public String getEyeColor() {
		return eyeColor;
	}
	public void setEyeColor(String eyeColor) {
		this.eyeColor = eyeColor;
	}
	public String getHairColor() {
		return hairColor;
	}
	public void setHairColor(String hairColor) {
		this.hairColor = hairColor;
	}
	public Integer getBust() {
		return bust;
	}
	public void setBust(Integer bust) {
		this.bust = bust;
	}
	public Integer getWaist() {
		return waist;
	}
	public void setWaist(Integer waist) {
		this.waist = waist;
	}
	public Integer getHips() {
		return hips;
	}
	public void setHips(Integer hips) {
		this.hips = hips;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	public Integer getBoys() {
		return boys;
	}
	public void setBoys(Integer boys) {
		this.boys = boys;
	}
	public Integer getGirls() {
		return girls;
	}
	public void setGirls(Integer girls) {
		this.girls = girls;
	}
	
	public List<PhotoVO> getPhotos() {
		return photos;
	}
	public void setPhotos(List<PhotoVO> photos) {
		this.photos = photos;
	}
	public Integer getIdCountry() {
		return idCountry;
	}
	public void setIdCountry(Integer idCountry) {
		this.idCountry = idCountry;
	}
	public Integer getIdHairColor() {
		return idHairColor;
	}
	public void setIdHairColor(Integer idHairColor) {
		this.idHairColor = idHairColor;
	}
	public Integer getIdEyeColor() {
		return idEyeColor;
	}
	public void setIdEyeColor(Integer idEyeColor) {
		this.idEyeColor = idEyeColor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	

}
