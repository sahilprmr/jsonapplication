import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/user';

  getAllUser(){
    return this.http.get(this.apiUrl)
  }

  getByCode(code : any){
    return this.http.get(this.apiUrl + '/' + code);
  }

  registration(userdata : any){
     return this.http.post(this.apiUrl,userdata);
    //  console.log(userdata + 'from service ');
     
  }

  updateUser(code : any,userdata : any){
     return this.http.post(this.apiUrl + '/' + code,userdata);
  }
}
