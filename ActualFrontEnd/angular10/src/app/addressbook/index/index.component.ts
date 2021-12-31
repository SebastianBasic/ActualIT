import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-addressbook-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(private service:SharedService) { }

  @ViewChild('closebutton') closebutton:any;

  AddressBook:any = [];
  title = 'AddressBook';

  ModalTitle:string = "";
  AddressBookEntry:any;
  ShowAddEditComponent:boolean = false;
  ShowDeleteComponent:boolean = false;
  ShowShowComponent:boolean = false;

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
    this.refreshAddreessList();
  }

}
