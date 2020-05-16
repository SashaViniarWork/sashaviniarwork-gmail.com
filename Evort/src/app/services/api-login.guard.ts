import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiLoginService } from './api-login.service';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginGuard implements CanActivate {

  constructor(
    private apiLoginService: ApiLoginService,
    private router: Router
  ) {}

  baseurl = 'https://evort.herokuapp.com';
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.apiLoginService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            return this.http.post(this.baseurl + '/auth/login/', data,
      {headers: this.httpHeaders});
            return false;
          }
          return true;
          });
      )
  }
}
