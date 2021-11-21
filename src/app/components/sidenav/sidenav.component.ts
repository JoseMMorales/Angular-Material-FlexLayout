import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleSidebarService } from '../../services/toggle-sidebar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  @Input()
  deviceXs: boolean = false;
  showFiller: boolean = false;

  @ViewChild('sidenav')
  nav: MatSidenav | undefined;

  constructor(private service: ToggleSidebarService) {}
  
  ngOnInit() {
    this.service.currentData$.subscribe((data: boolean) => {      
      this.showFiller = data;
      
      this.showFiller ? this.nav?.open() : this.nav?.close();
    });
  } 
}
