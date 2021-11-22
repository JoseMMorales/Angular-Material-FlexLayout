import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeSidevarService {
  private mode = new BehaviorSubject<string>('');
  currentMode$ = this.mode.asObservable();
  sidenavMode!: string;

  constructor(private observer: BreakpointObserver){
    this.initObservers();
  }

  initObservers() {    
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        return this.sidenavMode = 'over';
      } else {   
        return this.sidenavMode = 'side'; 
      }
    });
  }
}
