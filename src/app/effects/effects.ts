import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
//   count = signal<number>(0);

//  constructor(){
//    effect(() =>{
//     console.log("this is your count value", this.count())
//   });
//  }

//  increament(){
//   this.count.update(c => c +1)
//  }
//  isDarkMode= signal<boolean>(false)
//  constructor(){
//   effect(()=> {
//    if(this.isDarkMode()){
//     document.body.style.background= 'black';
//     document.body.style.color= 'white';

//    }else{
//     document.body.style.background= 'white';
//     document.body.style.color= 'black';


//    }
//   });
//  }
//  toggle(){
//   this.isDarkMode.update(mode => !mode)
//  }

message = signal("");
constructor(){
  effect(()=>{
    if(this.message()){
      setTimeout(()=>{
        this.message.set("");
      }, 1000);
    }
  });
}
showMessage(){
  this.message.set("hello this is temporary message");
}
}
