import { Component } from '@angular/core';

@Component({
  selector: 'app-revision',
  imports: [],
  templateUrl: './revision.html',
  styleUrl: './revision.css',
})
export class Revision {
city: string = "Karachi";
age: number = 19;
imgUrl = 'https://wallpapercave.com/wp/wp12588239.jpg';
num = 0;
name = "";
cities = "";
 updateValue(val : string){
     this.cities=val;
 }
count(){
  this.num++;
}
 nameses = "";
getData(val:string){
  this.nameses = val;
}
}