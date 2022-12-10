import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(){}
   step: any =1;
  ngOnInit(): void {
    
 

   }

   next1(){
    this.step = this.step+1;
   }

   Back1(){
    this.step = this.step -1;
   }

   next2(){

     this.step = this.step+1;
   }

    
  }
   





