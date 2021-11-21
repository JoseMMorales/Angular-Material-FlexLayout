import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleSidebarService } from '../services/toggle-sidebar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  @Input()
  deviceXs: boolean = false;
  showFiller: boolean = false;

  @ViewChild('sidenav')
  nav: MatSidenav | undefined;

  constructor(private service: ToggleSidebarService) {}
  
  ngOnInit() {
    this.service.currentData.subscribe((data: boolean) => {      
      this.showFiller = data;
      
      if (this.showFiller) {        
        this.nav?.open();
      } else {        
        this.nav?.close();
      }
    });
  } 
}
