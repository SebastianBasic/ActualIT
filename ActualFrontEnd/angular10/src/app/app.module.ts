import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

import { IndexComponent } from './addressbook/index/index.component';
import { UpsertComponent } from './addressbook/upsert/upsert.component';
import { DeleteComponent } from './addressbook/delete/delete.component';
import { ShowComponent } from './addressbook/show/show.component';

import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    IndexComponent,
    UpsertComponent,
    IndexComponent,
    DeleteComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [SharedService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
