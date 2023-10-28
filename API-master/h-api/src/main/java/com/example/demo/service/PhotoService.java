package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VO.PhotoVO;
import com.example.demo.entities.Photo;
import com.example.demo.repository.ModelRepository;
import com.example.demo.repository.PhotoRepository;

@Service
public class PhotoService {

	@Autowired(required = false) PhotoRepository photoRepository;
	@Autowired(required = false) ModelRepository modelRepository;
	
	public PhotoVO getPhotoById(int id) {
		return this.convertPhotoToPhotoVO(photoRepository.findById(id).get());
	}
	
	public PhotoVO convertPhotoToPhotoVO(Photo photo) {
		PhotoVO photoVO = new PhotoVO();
		
		photoVO.setDeleted(photo.isDeleted());
		photoVO.setUrl(photo.getPhotoUrl());
		photoVO.setModelID(photo.getModel().getModelId());
		photoVO.setId(photo.getPhotoId());
		return photoVO;
	}
	
	public PhotoVO savePhoto(PhotoVO photoVO) {
		return convertPhotoToPhotoVO(photoRepository.save(convertPhotoVOToPhoto(photoVO)));
	}
	
	public void deletePhotoById(int photoID) {
		Photo photo = photoRepository.findById(photoID).get();
		photo.setDeleted(true);
		
		photoRepository.save(photo);
	}
	
	private Photo convertPhotoVOToPhoto(PhotoVO photoVO) {
		Photo photo = new Photo();
		photo.setDeleted(photoVO.isDeleted());
		photo.setModel(modelRepository.findById(photoVO.getModelID()).get());
		photo.setPhotoUrl(photoVO.getUrl());
		
		return photo;
	}
}
