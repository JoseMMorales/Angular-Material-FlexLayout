import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { ToggleSidevarService } from '../../services/toggle-sidevar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  @Input()
  deviceXs: boolean = false;

  @Input()
  mode: MatDrawerMode = 'side';

  showFiller: boolean = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private serviceToggle: ToggleSidevarService) {}
  
  ngOnInit() {
    this.serviceToggle.currentData$.subscribe((data: boolean) => {      
      this.showFiller = data;
      this.showFiller ? this.sidenav?.open() : this.sidenav?.close();
    });

    console.log(this.mode);
    
    this.sidenav.mode = this.mode
  } 

}
