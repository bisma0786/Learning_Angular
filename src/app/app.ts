import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Getset } from './getset/getset';
import { Ifelse } from './ifelse/ifelse';
import { Switchcase } from './switchcase/switchcase';
import { Forloop } from './forloop/forloop';
import { Signals } from './signals/signals';
import { Revision } from './revision/revision';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Getset, Ifelse, Switchcase, Forloop, Signals, Revision ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learning_Angular');
}
