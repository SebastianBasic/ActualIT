import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { UpsertComponent } from './addressbook/upsert/upsert.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    UpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
