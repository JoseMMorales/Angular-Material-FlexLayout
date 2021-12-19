import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { ModeSidevarService } from 'src/app/services/mode-sidevar.service';
import { ToggleSidevarService } from '../../services/toggle-sidevar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  @Input()
  deviceXs: boolean = false;

  mode: MatDrawerMode = 'side';

  showFiller: boolean = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(
    private serviceToggle: ToggleSidevarService, 
    private serviceMode: ModeSidevarService) {}
  
  ngOnInit() {
    this.serviceToggle.currentData$.subscribe((data: boolean) => {    
      this.showFiller = data;
      this.showFiller ? this.sidenav?.open() : this.sidenav?.close();
    });

    this.serviceMode.getMode().subscribe(mode =>  {
      return this.mode = mode
    })
  } 



}
