package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VO.ModelVO;
import com.example.demo.VO.StatsSheet;
import com.example.demo.entities.Model;
import com.example.demo.service.ModelService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/model")
public class ModelController {

	@Autowired ModelService modelService;
	
	@GetMapping("/count")
	public Long count(){
		return modelService.count();
	}
	
	@GetMapping("/{id}")
	public ModelVO findById(@PathVariable Integer id) {
		return modelService.findById(id);
	}
	
	@GetMapping("")
	public List<ModelVO> findAllPaginated(Pageable page,@RequestParam(required=false, name="orderBy", defaultValue = "Rating") String orderBy){
		return modelService.findAllPaginated(page,orderBy);
	}
	
	@GetMapping("/aniversariante")
	public List<ModelVO> aniversariante(){
		return modelService.Aniversariante();
	}
	
	@GetMapping("/stats")
	public StatsSheet getStats() {
		return modelService.getStats();
	}

	@PostMapping("/saveSemFoto")
	public ModelVO saveModel(@RequestPart(name="newModel") ModelVO newModel){
		return modelService.saveModel(newModel);
	}
	
	
	@DeleteMapping("/{id}")
	public void deleteModel(@PathVariable Integer id) {
		modelService.deleteModel(id);
	}
	
	@PutMapping("/updateSemFoto")
	public Model updateModel(Model newModel){
		return modelService.updateModel(newModel);
	}
}
