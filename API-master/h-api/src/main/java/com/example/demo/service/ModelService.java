package com.example.demo.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.VO.ModelVO;
import com.example.demo.VO.StatsSheet;
import com.example.demo.entities.Model;
import com.example.demo.entities.Position;
import com.example.demo.repository.CountryRepository;
import com.example.demo.repository.EyeColorRepository;
import com.example.demo.repository.HairColorRepository;
import com.example.demo.repository.ModelRepository;
import com.example.demo.repository.PositionRepository;


@Service
public class ModelService {

	@Autowired(required = false) ModelRepository modelRepository;
	@Autowired(required = false) CountryRepository countryRepository;
	@Autowired(required = false) EyeColorRepository eyeColorRepository;
	@Autowired(required = false) HairColorRepository hairColorRepository;
	@Autowired(required = false) PositionRepository positionRepository;
	@Autowired(required = false) PhotoService photoService;
	
	public ModelVO findById(Integer id) {
		ModelVO modelVO = this.convertModelToModelVO(modelRepository.findById(id).get());
		return modelVO;
	}

	public Long count() {
		return modelRepository.count();
	}

	public List<ModelVO> Aniversariante() {
		Calendar cal = Calendar.getInstance();
		List<ModelVO> listModelVOBirthday = new ArrayList<ModelVO>();
		
		modelRepository.findAllByBirthday(cal.get(Calendar.MONTH)+1,cal.get(Calendar.DAY_OF_MONTH)).stream().forEach((item -> listModelVOBirthday.add(convertModelToModelVO(item))));;
		
		return listModelVOBirthday;
	}

	public StatsSheet getStats() {
		StatsSheet statsSheet = new StatsSheet();
		statsSheet.setCountWife((modelRepository.countByModelPosition(1)));
		statsSheet.setCountHRC((modelRepository.countByModelPosition(2)));
		statsSheet.setCountRC((modelRepository.countByModelPosition(3)));
		statsSheet.setCountHC((modelRepository.countByModelPosition(4)));
		statsSheet.setCountC((modelRepository.countByModelPosition(5)));
		statsSheet.setCountHConcubine((modelRepository.countByModelPosition(6)));
		statsSheet.setCountConcubine((modelRepository.countByModelPosition(7)));
		statsSheet.setCountHOneOff((modelRepository.countByModelPosition(8)));
		statsSheet.setCountOneOff((modelRepository.countByModelPosition(9)));
		
		return statsSheet;
	}

	public List<ModelVO> findAllPaginated(Pageable page, String orderBy) {
		List<ModelVO> listModelVO= new ArrayList<ModelVO>();
		
		switch(orderBy) {
		case "Rating" : modelRepository.findAllByOrderByModelRatingDescModelIdAsc(page).stream().forEach((item) -> listModelVO.add(convertModelToModelVO(item)));
						return listModelVO;
		case "LeastRecent" : modelRepository.findAllByOrderByModelIdAsc(page).stream().forEach((item) -> listModelVO.add(convertModelToModelVO(item)));
						return listModelVO;
		case "MostRecent" : modelRepository.findAllByOrderByModelIdDesc(page).stream().forEach((item) -> listModelVO.add(convertModelToModelVO(item)));
						return listModelVO;
		
		default : modelRepository.findAll().stream().forEach((item) -> listModelVO.add(convertModelToModelVO(item)));
						return listModelVO;
			
			
		}
	}

	public ModelVO saveModel(ModelVO newModel) {
		Model savedModel = modelRepository.save(this.convertModelVOToModel(newModel));
		
		if(!newModel.getPhotos().isEmpty()) {
			newModel.getPhotos().stream().forEach((photo) -> {
				photo.setModelID(savedModel.getModelId());
				this.photoService.savePhoto(photo);
				}
			);
		}
		return this.convertModelToModelVO(savedModel) ;
	}

	public void deleteModel(Integer id) {
		modelRepository.deleteById(id);
		
	}

	public Model updateModel(Model newModel) {
		Model savedModel = modelRepository.save(newModel);
		return savedModel;
	}
	
	private ModelVO convertModelToModelVO(Model model) {
		ModelVO modelVO = new ModelVO();
		
		modelVO.setBoys(model.getModelBoys());
		modelVO.setBust(model.getModelBust());
		modelVO.setCountry(model.getModelCountry().getCountryName());
		modelVO.setEyeColor(model.getModelEyeColor().getEyeColorName());	
		model.getPhoto().stream().forEach((item) -> {
			if(!item.isDeleted())
			modelVO.getPhotos().add(photoService.convertPhotoToPhotoVO(item));
			});
		modelVO.setGirls(model.getModelGirls());
		modelVO.setHairColor(model.getModelHairColor().getHairColorName());
		modelVO.setHeight(model.getModelHeight());
		modelVO.setHips(model.getModelHips());
		modelVO.setNomeCompleto(model.getModelName());
		modelVO.setRating(model.getModelRating());
		modelVO.setWaist(model.getModelWaist());
		modelVO.setId(model.getModelId());
		
		return modelVO;
	}
	
	private Model convertModelVOToModel(ModelVO modelVO) {
		Model model = new Model();
		model.setModelBoys(modelVO.getBoys());
		model.setModelBust(modelVO.getBust());
		model.setModelCountry((modelVO.getIdCountry() == null) ? countryRepository.findById(0).get() :countryRepository.findById(modelVO.getIdCountry()).get());
		model.setModelEyeColor(eyeColorRepository.findById(modelVO.getIdEyeColor()).get());
		model.setModelGirls(modelVO.getGirls());
		model.setModelHairColor(hairColorRepository.findById(modelVO.getIdHairColor()).get());
		model.setModelHeight(modelVO.getHeight());
		model.setModelHips(modelVO.getHips());
		model.setModelName(modelVO.getNomeCompleto());
		model.setModelRating(modelVO.getRating());
		model.setModelWaist(modelVO.getWaist());
		
		model.setModelPosition(this.getPosition(modelVO.getRating()));		
		return model;
	}
	
	private Position getPosition(Double modelRating) {
		Integer ratingConverted = (int) (modelRating * 10);
		
		switch(ratingConverted) {
			case 60: return positionRepository.findById(9).get();
			case 65: return positionRepository.findById(8).get();
			case 70: return positionRepository.findById(7).get();
			case 75: return positionRepository.findById(6).get();
			case 80: return positionRepository.findById(5).get();
			case 85: return positionRepository.findById(4).get();
			case 90: return positionRepository.findById(3).get();
			case 95: return positionRepository.findById(2).get();
			case 100: return positionRepository.findById(1).get();
			default: return positionRepository.findById(9).get();
		}
	}
}
