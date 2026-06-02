import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.css',
})
export class Getset {
  name: string= "";
  city: string ="";
  email: string = "";
   updateName(val : string){
      this.name =val;
   }

   getEmail(val : string){
    this.email =val;
   }
}
