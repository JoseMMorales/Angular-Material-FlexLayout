import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeSidevarService {
  private mode = new BehaviorSubject<string>('');
  currentMode$ = this.mode.asObservable();

  constructor(private observer: BreakpointObserver){}

  initObservers(): void {    
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.mode.next('over')
      } else {
        this.mode.next('side')
      }
    });
  }


  getMode():Observable<string>{
    this.initObservers();
    return this.currentMode$;
  }
}

