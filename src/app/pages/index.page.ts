import { MainComponent } from './../components/main.components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: ` <app-main></app-main> `,
  imports: [MainComponent],
})
export default class HomeComponent {}
