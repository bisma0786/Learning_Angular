import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  isLoggedIn = false;

  marks =50;
 isToggleButton = false;

  toggleButton(){
    this.isToggleButton = !this.isToggleButton
  }

  age = 0;

  updateAge(val: string){
    this.age = Number(val);
  }
  section = "home";
}
