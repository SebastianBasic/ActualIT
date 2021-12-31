import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addressbook-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  @Input() AddressBookEntry:any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  firstName:string = "";
  lastName:string = "";
  address:string = "";
  telNumber:string = "";

  ngOnInit(): void {
    this.firstName = this.AddressBookEntry.firstName;
    this.lastName = this.AddressBookEntry.lastName;
    this.address = this.AddressBookEntry.adress;
    this.telNumber = this.AddressBookEntry.telNumber;
  }

  closeShow(){
    this.onClose.emit(true);
  }

}
