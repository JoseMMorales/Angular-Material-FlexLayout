import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  private data = new BehaviorSubject<boolean>(false);
  currentData = this.data.asObservable();

  constructor(){}

  setData(data: boolean): void {
    return this.data.next(data);
  }
}
