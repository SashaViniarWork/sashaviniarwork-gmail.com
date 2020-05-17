import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  // baseurl = 'http://127.0.0.1:8000';
  baseurl = 'https://evort.herokuapp.com';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<any> {
    return this.http.post(this.baseurl + '/auth/registration/', data,
      {headers: this.httpHeaders});
  }

  loginUser(data): Observable<any> {
    this.loggedIn.next(true); {
    return this.http.post(this.baseurl + '/auth/login/', data,
      {headers: this.httpHeaders});
    }
  }


  /*
  Колись може таки юзер зможе вийти з сайту, але поки застряг тут навічно
   */
/*
  logoutUser(): Observable<any> {
    this.loggedIn.next(false); {
      return this.http.post(this.baseurl + '/auth/logout/', {},
      {headers: this.httpHeaders});
    }
  }

 */

}



