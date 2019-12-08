import { Injectable } from '@angular/core';
import { City } from 'src/app/_models/city';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  create(params: City): Observable<City> {
    return this.http.post<City>(`${environment.api_url}/api/v1/cities`, {city: params});
  }

  delete(id): Observable<City> {
    return this.http.delete<City>(`${environment.api_url}/api/v1/cities/${id}`);
  }

  all(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.api_url}/api/v1/cities`);
  }
}
