import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    RouterModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
