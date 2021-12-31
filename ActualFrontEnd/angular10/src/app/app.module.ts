import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './addressbook/index/index.component';
import { UpsertComponent } from './addressbook/upsert/upsert.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './addressbook/delete/delete.component';


@NgModule({
  declarations: [
    IndexComponent,
    UpsertComponent,
    IndexComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
