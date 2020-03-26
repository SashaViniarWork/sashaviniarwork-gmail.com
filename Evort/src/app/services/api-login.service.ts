import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  // baseurl = 'http://127.0.0.1:8000';
  baseurl = 'https://evort.herokuapp.com';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<any> {
    return this.http.post(this.baseurl + '/auth/registration/', data,
      {headers: this.httpHeaders});
  }
}
