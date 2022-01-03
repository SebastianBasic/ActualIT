import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addressbook-delete-confirm',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() contact:any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  id:string = "";



  ngOnInit(): void {
    this.id = this.contact.id;
  }

  deleteAddressBookEntry(){
    this.service.deleteAddress(this.id).subscribe(data=>{
      this.onClose.emit(true);
    });   
  }

  cancelDelete(){
    this.onClose.emit(true);  
  }

}
