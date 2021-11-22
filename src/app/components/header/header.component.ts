import { Component, Input } from '@angular/core';
import { ToggleSidevarService } from '../../services/toggle-sidevar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input()
  deviceXs: boolean = false;
  toggleValue: boolean = false;

  constructor(private service: ToggleSidevarService) {}

  onValChange() {
    this.toggleValue = !this.toggleValue
    this.service.setData(this.toggleValue);
  }
}
