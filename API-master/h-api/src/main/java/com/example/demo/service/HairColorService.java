package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VO.HairColorVO;
import com.example.demo.entities.HairColor;
import com.example.demo.repository.HairColorRepository;

@Service
public class HairColorService {


	@Autowired(required = false) HairColorRepository hairColorRepository;
	
	public HairColor findById(Integer id) {
		return hairColorRepository.findById(id).get();
	}
	
	public List<HairColorVO> findAll(){
		List<HairColorVO> listHairColorVO = new ArrayList<HairColorVO>();
		
		hairColorRepository.findAll().stream().forEach((item) -> listHairColorVO.add(convertHairColotToHairColorVO(item)));
		
		return listHairColorVO;
	}
	
	private HairColorVO convertHairColotToHairColorVO(HairColor hairColor) {
		HairColorVO hairColorVO = new HairColorVO();
		
		hairColorVO.setHairColor(hairColor.getHairColorName());
		hairColorVO.setIdHairColor(hairColor.getHairColorId());
		
		return hairColorVO;
	}
}
