import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatButtonToggleModule,
  MatDividerModule
]

@NgModule({
  exports: [Material],
  imports: [Material]
})
export class MaterialModule { }
