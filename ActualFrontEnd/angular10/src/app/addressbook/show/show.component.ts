import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addressbook-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  @Input() contact:any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  firstName:string = "";
  lastName:string = "";
  address:string = "";
  telNumber:string = "";

  ngOnInit(): void {
    this.firstName = this.contact.firstName;
    this.lastName = this.contact.lastName;
    this.address = this.contact.adress;
    this.telNumber = this.contact.telNumber;
  }

  closeShow(){
    this.onClose.emit(true);
  }

}
