import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Getset } from './getset/getset';
import { Ifelse } from './ifelse/ifelse';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Getset, Ifelse ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learning_Angular');
}
