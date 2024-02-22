import { Component } from '@angular/core';
import { SignalService } from './signal.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child1Component, Child2Component, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private signalService: SignalService) { }

  title = 'OSDWeek5';

  inc() {
    this.signalService.increment();
    console.log('The count is: ' + this.signalService.count());
  }

  dec() {
    this.signalService.decrement();
    console.log('The count is: ' + this.signalService.count());
  }
}

bootstrapApplication(AppComponent);
