import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
  count = signal<number>(0);

 constructor(){
   effect(() =>{
    console.log("this is your count value", this.count())
  });
 }

 increament(){
  this.count.update(c => c +1)
 }
}
