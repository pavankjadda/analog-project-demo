import {Component} from '@angular/core';
import {MainComponent} from '../components/main.components';

@Component({
  selector: 'app-about',
  standalone: true,
  template: ` <div>
    <h1>About</h1>
    <p>This is the about page</p>
  </div>`
})
export default class AboutPage {}
