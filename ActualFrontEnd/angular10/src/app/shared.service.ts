import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:7126/api";

  constructor(private http:HttpClient) { }

  getAddressList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/AddressBooks");
  }

  addAddress(val:any){
    return this.http.post(this.APIUrl + "/AddressBooks", val);
  }

  updateAddress(val:any){
    return this.http.put(this.APIUrl + "/AddressBooks", val);
  }

  deleteAddress(val:any){
    return this.http.delete(this.APIUrl + "/AddressBooks/" + val);
  }
}
