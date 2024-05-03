import { ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { LinkService } from '../link.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-linkcrud',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './linkcrud.component.html',
  styleUrl: './linkcrud.component.css'
})
export class LinkcrudComponent implements OnInit{
   // Define your FormGroup
   formGroup: FormGroup;

   constructor(
    private  cdr: ChangeDetectorRef,
    private httpClient: HttpClient, private formBuilder: FormBuilder,
    private router: Router) {
     // Initialize your formGroup using FormBuilder
     this.formGroup = this.formBuilder.group({
       // Define your form controls here
       // Example:
       linkName: [''],
       newLink: ['']
     });
   }
 
 
     // Extract form data from formGroup
    
  
  private linkService=inject(LinkService);


//getAll
links:any[]=[];


  ngOnInit(): void {
    this.linkService.getLinks().subscribe((links:any)=>{
    this.links=links;});
}

//save
public func(){ 
  console.log("1o");
  const formData = this.formGroup.value;
  console.log("2o");
  console.log(formData.linkName);
  console.log("3o");
  this.linkService.createLink(formData).subscribe({
    
   next: response => {
    console.log("4o");
      console.log('Post created successfully:', response);
       alert('Post created successfully');
        this.ngOnInit();
        console.log("5o");
    },
    error: error => {
      console.error('Error creating post:', error);
    }}
  ); console.log("o");

}

//deleteOne
public deleteThisLinkById(id:number){
this.linkService.deleteLink(id).subscribe({
  next: response => {
     console.log('Post deleted successfully:', response);
      alert('Post deleted successfully');
      this.ngOnInit();
   },
   error: error => {
     console.error('Error deleting post:', error);
   }}
 );


}

}


