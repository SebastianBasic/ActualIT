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

  @Input() contact:any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  Id:string = "";
  FirstName:string = "";
  LastName:string = "";
  Address:string = "";
  TelNumber:string = "";


  ngOnInit(): void {
    this.Id = this.contact.id;
    this.FirstName = this.contact.firstName;
    this.LastName = this.contact.lastName;
    this.Address = this.contact.address;
    this.TelNumber = this.contact.telNumber;
  }

  onSubmit(){
    var entry = {
      firstName : this.FirstName,
      lastName : this.LastName,
      address : this.Address,
      telNumber : this.TelNumber
    }
  
    if (this.contact.firstName) {
      this.service.updateAddress(entry).subscribe(res => {
        this.onClose.emit(true);
      });
    }else{
      this.service.addAddress(entry).subscribe(res => {
        this.onClose.emit(true);
      });
    }
  }
}
