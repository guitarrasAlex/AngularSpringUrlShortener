import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';





@Component({
  selector: 'app-rutear',
  standalone: true,
  imports: [],
  templateUrl: './rutear.component.html',
  styleUrl: './rutear.component.css'
})


export class RutearComponent implements OnInit {
  



  newLink:string="";
  data:any={};
  private linkService=inject(LinkService);
 


  constructor(@Inject(DOCUMENT) private document: any,private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.newLink = params['link'];})
      this.linkService.getLinkByNewLink(this.newLink).subscribe((data)=>{
        this.data=data;});
        document.location.href=this.data.linkName; 
  }}
    
 
     
  
 


 

