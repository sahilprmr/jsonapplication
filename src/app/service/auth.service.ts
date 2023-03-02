import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000';

  getAllUser(){
    return this.http.get(this.apiUrl)
  }

  getByCode(code : any){
    return this.http.get(this.apiUrl + '/' + code);
  }

  registration(userdata : any){
    this.http.post(this.apiUrl,userdata);
  }

  updateUser(code : any,userdata : any){
    this.http.post(this.apiUrl + '/' + code,userdata);
  }
}
