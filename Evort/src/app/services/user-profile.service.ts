import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
export interface users {
  id : bigint;
  username : string;
  firstName : string;
  lastName : string;
  email : string;
  phone : string;
  country : string;
  address : string;
  dateOfBirth : string;
}
*/

/*
Просто робить якусь хрінь. ну тобто абсолютно нічого, терміново потребує ін'єкції (injection)
 */


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  baseurl = 'https://evort.herokuapp.com';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllUsersData(): Observable<any> {
    return this.http.get(this.baseurl + '/users/');
  }
}
