import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleSidevarService } from '../../services/toggle-sidevar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  @Input()
  deviceXs: boolean = false;

  showFiller: boolean = false;
  modeValue: any = 'side';

  @ViewChild('sidenav')
  sidenav: MatSidenav | undefined;

  constructor(private serviceToggle: ToggleSidevarService) {}
  
  ngOnInit() {
    this.serviceToggle.currentData$.subscribe((data: boolean) => {      
      this.showFiller = data;
      this.showFiller ? this.sidenav?.open() : this.sidenav?.close();
    });
  } 
}
