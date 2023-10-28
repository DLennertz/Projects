package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Model;

public interface ModelRepository extends JpaRepository<Model,Integer>{

	@Query("SELECT m FROM model m WHERE MONTH(m.modelBirthday) = ?1 AND DAY(m.modelBirthday) = ?2")
	List<Model> findAllByBirthday(Integer month, Integer day);
	
	@Query("SELECT COUNT(*) FROM model m where m.modelPosition.positionId = ?1")
	Integer countByModelPosition(Integer id);

	List<Model> findAllByOrderByModelRatingDescModelIdAsc(Pageable page);

	List<Model> findAllByOrderByModelIdDesc(Pageable page);
	
	List<Model> findAllByOrderByModelIdAsc(Pageable page);
}
