import { Component, EventEmitter, Input } from '@angular/core';
import { ToggleSidebarService } from '../services/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input()
  deviceXs: boolean = false;
  toggleValue: boolean = false;

  constructor(private service: ToggleSidebarService) {}

  onValChange() {
    this.toggleValue = !this.toggleValue
    this.service.setData(this.toggleValue);
  }
}
