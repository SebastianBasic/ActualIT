import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addressbook-delete-confirm',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() AddressBookEntry:any;
  Id:string = "";



  ngOnInit(): void {
    this.Id = this.AddressBookEntry.id;
  }

  deleteAddressBookEntry(){

    this.service.deleteAddress(this.Id).subscribe(data=>{
      
    });   
  }

}
