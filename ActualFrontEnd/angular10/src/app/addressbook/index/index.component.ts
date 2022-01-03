import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-addressbook-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, OnDestroy {

  constructor(private service:SharedService) { }

  @ViewChild('closebutton') closebutton:any;

  allContacts:any = [];
  contact:any;
  title = 'AddressBook';
  modalTitle:string = "";
  showAddEditComponent:boolean = false;
  showDeleteComponent:boolean = false;
  showShowComponent:boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : 'full_numbers',
      pageLength : 5,
      lengthMenu : [5, 10, 25],
      order : [1, 'asc'],
      columnDefs : [ {
      targets : [4],
      orderable : false
      } ],
    }
  this.refreshAddreessList();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  refreshAddreessList() {
    this.service.getAddressList().subscribe(data => {
      this.allContacts = data;
      this.dtTrigger.next(this.dtOptions);
    })
  }

  addClick(){
    this.contact = {
      id : 0,
      firstName : "",
      lastName : "",
      address : "",
      telNumber : ""
    }

    this.modalTitle = "Add New Address";
    this.showAddEditComponent = true;
  }

  showClick(contact:any){
    this.contact = contact;

    this.modalTitle = "Record details";
    this.showShowComponent = true;
  }

  editClick(contact:any){
    this.contact = contact;

    this.modalTitle = "Edit Address";
    this.showAddEditComponent = true;
  }

  deleteClick(contact:any){
    this.contact = contact;

    this.modalTitle = "Delete Address";
    this.showDeleteComponent = true;
  }

  closeClick(){
    this.closebutton.nativeElement.click();
    this.showAddEditComponent = false;
    this.showDeleteComponent = false;
    this.showShowComponent = false;
    window.location.reload();
  }

}
