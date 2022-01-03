import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Subject} from 'rxjs';

class DataTablesResponse {
  data: any[] = [];
  draw: number = 0;
  recordsFiltered: number = 0;
  recordsTotal: number = 0;
}

@Component({
  selector: 'app-addressbook-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, OnDestroy {

  constructor(private service:SharedService, private http: HttpClient) { }

  @ViewChild('closebutton') closebutton:any;

  AddressBook:any = [];
  title = 'AddressBook';

  ModalTitle:string = "";
  AddressBookEntry:any;
  ShowAddEditComponent:boolean = false;
  ShowDeleteComponent:boolean = false;
  ShowShowComponent:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
    }
  this.refreshAddreessList();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  refreshAddreessList() {
    this.service.getAddressList().subscribe(data => {
      this.AddressBook = data;
      this.dtTrigger.next(this.dtOptions);
    })
  }

  addClick(){
    this.AddressBookEntry = {
      Id : 0,
      FirstName : "",
      LastName : "",
      Address : "",
      TelNumber : ""
    }

    this.ModalTitle = "Add New Address";
    this.ShowAddEditComponent = true;
  }

  showClick(address:any){
    this.AddressBookEntry = address;

    this.ModalTitle = "Record details";
    this.ShowShowComponent = true;
  }

  editClick(address:any){
    this.AddressBookEntry = address;

    this.ModalTitle = "Edit Address";
    this.ShowAddEditComponent = true;
  }

  deleteClick(address:any){
    this.AddressBookEntry = address;

    this.ModalTitle = "Delete Address";
    this.ShowDeleteComponent = true;
  }

  closeClick(){
    this.closebutton.nativeElement.click();
    this.ShowAddEditComponent = false;
    this.ShowDeleteComponent = false;
    this.ShowShowComponent = false;
    window.location.reload();
  }

}
