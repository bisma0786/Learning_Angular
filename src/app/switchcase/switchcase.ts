import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  imports: [],
  templateUrl: './switchcase.html',
  styleUrl: './switchcase.css',
})
export class Switchcase {
  value: string = 'home';
  tab = 'about';

  category = '';
  updateCat(val:string){
    this.category=val.toLocaleLowerCase();
  }
}
