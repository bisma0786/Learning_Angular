import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computedsignals',
  imports: [],
  templateUrl: './computedsignals.html',
  styleUrl: './computedsignals.css',
})
export class Computedsignals {
  count = signal<number>(2);

  doubleCount = computed<number>(() => this.count() * 2);
  tripleCount = computed<number>(() => this.count() * 3);

  increament(){
    this.count.set(this.count() + 1);
  }
  firstName= signal<string>("bisma");
    lastName= signal<string>("Raza");

    fullName = computed<string>(() => `${this.firstName()}  ${this.lastName()}`)

    price = signal<number[]>([34, 76, 87, 54]);
    total = computed<number>(() => {
      return this.price().reduce((acc , curr)=> acc + curr , 0);
    });

}
