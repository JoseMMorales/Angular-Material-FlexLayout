import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidevarService {
  private data = new BehaviorSubject<boolean>(false);
  currentData$ = this.data.asObservable();

  constructor(){}

  setData(data: boolean) {
    return this.data.next(data);
  }
}
