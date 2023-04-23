package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.HairColor;


public interface HairColorRepository extends JpaRepository<HairColor,Integer>{

}