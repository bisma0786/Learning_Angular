import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(10);
  val = 20;
  // count.update(c => c + 1);  //signal Update
  // items.mutate(a => a.push(4));  //signal mutate

  increment(){
    this.count.update(c => c + 1);
  }

   decrement(){
    if(this.count() > 0){
    
    this.count.update(c => c - 1);}
  }

  reset(){
    this.count.set(0);
  }
}
