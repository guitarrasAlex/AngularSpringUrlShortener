import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ilinks } from './ilinks';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }
  baseUrl:string='http://localhost:8080/api/';
 


     getLinks(){
       return this.http.get('http://localhost:8080/api/v1/links');
     }
     getLinkByNewLink(newLink:string){
    
      return this.http.get('http://localhost:8080/api/'+newLink);
     }
     getLink(id:number){
      return this.http.get('http://localhost:8080/api/v1/link/'+id);
     }
    createLink(producto:any){
      return this.http.post('http://localhost:8080/api/v1/links', producto)
    }
    deleteLink(id:number){
      return this.http.delete('http://localhost:8080/api/v1/link/'+id)
    }
}
