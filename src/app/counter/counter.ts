import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
   counter: number = 0;
  // handleAdd(){
  //   this.counter++;
  // }
  // handleMinus(){
  //   if(this.counter>0){
  //    this.counter--;
  //    }
  // }
  // handleReset(){
  //   this.counter=0;
  // }

  handleClick(value: string){
    if(value==='Plus'){
       this.counter++;
    }
    
    else if(value==='Minus'){
      if(this.counter >0){
        this.counter--;
        }
    }
    else if(value==='Reset'){
      this.counter=0;
    }
  }
}

