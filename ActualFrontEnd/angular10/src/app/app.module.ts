import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { UpsertComponent } from './addressbook/upsert/upsert.component';
import { SharedService } from './shared.service';
import { IndexComponent } from './addressbook/index/index.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressbookComponent,
    UpsertComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AddressbookComponent]
})
export class AppModule { }
