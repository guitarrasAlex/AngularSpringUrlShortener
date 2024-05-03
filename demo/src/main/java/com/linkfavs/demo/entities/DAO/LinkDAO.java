package com.linkfavs.demo.entities.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linkfavs.demo.entities.LinkEntity;

@Repository
public interface LinkDAO extends JpaRepository<LinkEntity, Long> {

    public Optional<LinkEntity> findByNewLink(String newLink);

}