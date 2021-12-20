import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeSidevarService {
  private mode = new BehaviorSubject<MatDrawerMode>('side');
  currentMode$ = this.mode.asObservable();

  constructor(private observer: BreakpointObserver){}

  initObservers(): void {    
    this.observer.observe(['(max-width: 599px)']).subscribe((res) => {
      if (res.matches) {
        this.mode.next('over')
      } else {
        this.mode.next('side')
      }
    });
  }


  getMode():Observable<MatDrawerMode>{
    this.initObservers();
    return this.currentMode$;
  }
}

