import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Observable, of } from 'rxjs';
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

  showFiller: boolean = false;
  modeValue$: Observable<string> = of('side');

  @ViewChild('sidenav')
  sidenav: MatSidenav | undefined;
  mode!: MatDrawerMode;

  constructor(private serviceToggle: ToggleSidevarService, private serviceMode: ModeSidevarService) {}
  
  ngOnInit() {
    this.serviceToggle.currentData$.subscribe((data: boolean) => {      
      this.showFiller = data;
      this.showFiller ? this.sidenav?.open() : this.sidenav?.close();
    });

    this.serviceMode.getMode().subscribe(
      (value: any) => {
        this.mode = value;
      }
    )
    

  } 
}
