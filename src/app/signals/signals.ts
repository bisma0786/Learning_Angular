import { Component, signal } from '@angular/core';


interface User{
  name: string;
  age : number;
}
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
 // signals with datatypes
  name = signal<string>("bisma");
  age = signal<number>(19);
  isAmin = signal<boolean>(true);
  //Array
  num = signal<number []>([23, 54, 54, 12]);
  //Object
  user = signal<{name: string, age: number}>({
    name: "bisma",
    age :78
  })
  //using Interface
   users = signal<User>({
    name: "bisma",
    age :78
  })

  directUpdate(){
    this.num.set([34,89,9])
  }

  addNumber(){
    this.num.update(arr => [...arr, 590, 65])
  }
}
