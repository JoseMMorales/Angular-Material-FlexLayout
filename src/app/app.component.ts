import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ModeSidevarService } from './services/mode-sidevar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private mediaSub: Subscription | undefined;
  deviceXs!: boolean;

  constructor(private mediaObserver: MediaObserver, private serviceMode: ModeSidevarService) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((change: MediaChange) => {
        this.deviceXs = change.mqAlias === 'xs' ? true : false;
      }
    )
  }

  ngAfterViewInit() {
    /*his.serviceMode.currentMode$.subscribe((value: any) => {
      console.log(value)
      console.log("Hello");
      this.modeValue = value
      this.sidenav.mode = this.modeValue;
    });*/
    this.serviceMode.currentMode$.subscribe((value: any) => console.log(value));
    
  }

  OnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
}
