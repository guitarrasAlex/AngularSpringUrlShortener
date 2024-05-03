package com.linkfavs.demo.controllers;

import com.linkfavs.demo.entities.LinkEntity;
import com.linkfavs.demo.services.LinkService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LinkController {

    @Autowired
    private LinkService linkService;

    public LinkController(LinkService linkService) {
        this.linkService = linkService;
    }

    @GetMapping("api/{newLink}")
    public Optional<LinkEntity> getLinkShort(@PathVariable String newLink) {
        return linkService.getLinkShort(newLink);
    }

    @GetMapping("api/v1/links")
    public List<LinkEntity> getLinks() {
        return linkService.getLinks();
    }

    @GetMapping("api/v1/link/{id}")
    public Optional<LinkEntity> getLinkById(@PathVariable long id) {
        return linkService.getLinkById(id);

    }

    @PostMapping("api/v1/links")
    public void createLink(@RequestBody LinkEntity linkEntity) {
        this.linkService.createLink(linkEntity);

    }

    @DeleteMapping("api/v1/link/{id}")
    public void deleteLinkById(@PathVariable long id) {
        this.linkService.deleteLink(id);
    }

}
