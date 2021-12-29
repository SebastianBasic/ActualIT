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

  ModalTitle:string = "";
  AddressBookEntry:any;
  AddEditComponent:boolean = false;

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
    this.AddEditComponent = true;
  }

  editClick(address:any){
    this.AddressBookEntry = address;

    this.ModalTitle = "Edit Address";
    this.AddEditComponent = true;
  }

  deleteClick(address:any){
    if(confirm('Are you shure?')){
      this.service.deleteAddress(address.id).subscribe(data => {
        alert("Address deleted")
      });
    }
  }

  closeClick(){
    this.refreshAddreessList();
    this.AddEditComponent = false;
  }

}
