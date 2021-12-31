import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addressbook-upsert-form',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.css']
})
export class UpsertComponent implements OnInit {

  constructor(private service: SharedService) { }

  ActivateAddEditComponent:boolean = false;

  @Input() AddressBookEntry:any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  Id:string = "";
  FirstName:string = "";
  LastName:string = "";
  Address:string = "";
  TelNumber:string = "";


  ngOnInit(): void {
    this.Id = this.AddressBookEntry.id;
    this.FirstName = this.AddressBookEntry.firstName;
    this.LastName = this.AddressBookEntry.lastName;
    this.Address = this.AddressBookEntry.adress;
    this.TelNumber = this.AddressBookEntry.telNumber;
  }

  addAddressBookEntry(){
    var entry = {
      firstName : this.FirstName,
      lastName : this.LastName,
      adress : this.Address,
      telNumber : this.TelNumber
    }

    this.service.addAddress(entry).subscribe(res => {
      this.onClose.emit(true);
    });
  }

  updateAddressBookEntry(){
    var entry = {
      id : this.Id,
      FirstName : this.FirstName,
      LastName : this.LastName,
      Adress : this.Address,
      TelNumber : this.TelNumber
    }

    this.service.updateAddress(entry).subscribe(res => {
      this.onClose.emit(true);
    });
  }
}
