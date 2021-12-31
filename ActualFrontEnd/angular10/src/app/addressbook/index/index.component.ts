import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-addressbook-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(private service:SharedService) { }

  AddressBook:any = [];
  title = 'AddressBook';

  ModalTitle:string = "";
  AddressBookEntry:any;
  ShowAddEditComponent:boolean = false;
  ShowDeleteComponent:boolean = false;

  ngOnInit(): void {
    this.refreshAddreessList();
  }

  refreshAddreessList() {
    this.service.getAddressList().subscribe(data => {
      this.AddressBook = data;
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
    this.refreshAddreessList();
    this.ShowAddEditComponent = false;
    this.ShowDeleteComponent = false;
  }

}
