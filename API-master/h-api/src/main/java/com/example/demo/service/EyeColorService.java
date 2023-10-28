package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VO.EyeColorVO;
import com.example.demo.entities.EyeColor;
import com.example.demo.repository.EyeColorRepository;

@Service
public class EyeColorService {
	
	@Autowired(required = false) EyeColorRepository eyeColorRepository;
	
	public EyeColorVO findById(Integer id) {
		EyeColorVO eyeColorVO = this.convertEyeColorToEyeColorVO(eyeColorRepository.findById(id).get());
		
		return eyeColorVO;
	}
	
	public List<EyeColorVO> findAll(){
		List<EyeColorVO> listEyeColorVO = new ArrayList<EyeColorVO>();
		
		eyeColorRepository.findAll().stream().forEach((item) -> listEyeColorVO.add(this.convertEyeColorToEyeColorVO(item)));
		
		return listEyeColorVO;
	}
	
	private EyeColorVO convertEyeColorToEyeColorVO(EyeColor eyeColor) {
		EyeColorVO eyeColorVO = new EyeColorVO();
		
		eyeColorVO.setEyeColor(eyeColor.getEyeColorName());
		eyeColorVO.setIdEyeColor(eyeColor.getEyColorId());
		
		return eyeColorVO;
	}

}

