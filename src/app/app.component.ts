import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { ModeSidevarService } from './services/mode-sidevar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private mediaSub: Subscription | undefined;
  deviceXs!: boolean;
  mode!: string;

  constructor(private mediaObserver: MediaObserver, private serviceMode: ModeSidevarService) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((change: MediaChange) => {
        this.deviceXs = change.mqAlias === 'xs' ? true : false;
      }
    )
  }

  ngAfterViewInit() {
    this.serviceMode.currentMode$.subscribe((value: string) => {
      this.mode = value;
    });
  }

  OnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
}
