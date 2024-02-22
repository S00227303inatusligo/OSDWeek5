import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() { }

  increment() {
    // Increment the count by 1.    
    this.count.update(value => value + 1);
  }

  decrement () {
    if(this.count() > 0)
    {
      this.count.update(value => value - 1);
    }
  }

  getCount() {
    return this.count;
  }
}
