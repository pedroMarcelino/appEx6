import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './views/ngif/ngif.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './views/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
