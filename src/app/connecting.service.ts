import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectingService {
  private urlhttps = 'http://localhost:3000/';

  constructor(
      private http: HttpClient,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  Login(credential) {
    return this.http
        .post(this.urlhttps + 'login', credential)
        .pipe(Response => Response);
  }

  Register(user) {
    return this.http
        .post(this.urlhttps + 'register', user)
        .pipe(Response => Response);
  }

  GetUsers() {
    return this.http
        .get(this.urlhttps + 'user')
        .pipe(Response => Response);
  }
}
