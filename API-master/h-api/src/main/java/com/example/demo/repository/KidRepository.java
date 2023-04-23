package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Kid;

public interface KidRepository extends JpaRepository<Kid,Integer>{

}
