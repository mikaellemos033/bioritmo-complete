import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from 'src/app/_models/auth';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(auth: Auth): Observable<any> {
    return this.http.post(`${environment.api_url}/login`, {user: auth}, {observe: 'response'});
  }

  logout(): Observable<any> {
    return this.http.delete(`${environment.api_url}/logout`);
  }
}
