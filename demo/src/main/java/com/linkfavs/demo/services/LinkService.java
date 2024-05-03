package com.linkfavs.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linkfavs.demo.entities.DAO.LinkDAO;

import com.linkfavs.demo.entities.LinkEntity;

@Service
public class LinkService {

    @Autowired
    private LinkDAO linkDAO;

    public LinkService(LinkDAO linkDAO) {
        this.linkDAO = linkDAO;
    }

    public List<LinkEntity> getLinks() {
        return linkDAO.findAll();

    }

    public Optional<LinkEntity> getLinkShort(String newLink) {
        return linkDAO.findByNewLink(newLink);
    }

    public Optional<LinkEntity> getLinkById(long id) {
        return linkDAO.findById(id);
    }

    public void createLink(LinkEntity linkEntity) {
        this.linkDAO.save(linkEntity);

    }

    public void deleteLink(long id) {
        this.linkDAO.deleteById(id);

    }
}
