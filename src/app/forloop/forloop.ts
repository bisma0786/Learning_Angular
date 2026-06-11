import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css',
})
export class Forloop {
  // items = ['apple', 'mango', 'banana']
  // user = [
  //   {name: 'bisma' , age: 18},
  //   {name: 'aisha' , age: 38},
  //   {name: 'jia' , age: 19}
  // ];
  fruits =['apple', 'mango', 'bannana', 'cherry'];
  removeItem(i: number){
    this.fruits.splice(i,1);
  }
}
