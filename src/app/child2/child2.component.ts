import { Component } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  constructor(private signalService: SignalService) { }

  doubleCount = this.signalService.doubleCount;

}
