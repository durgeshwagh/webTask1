import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Form1 = document.getElementById("form1")
  Form2 = document.getElementById("form2")
  Form3 = document.getElementById("form3")
 
   Next1 = document.getElementById("Next1")
   Next2 = document.getElementById("Next2")

   Back2 = document.getElementById("Back2")
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
   





