import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/_models/city';
import { Observable } from 'rxjs';
import { Temperature } from 'src/app/_models/temperature';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  find(city: City): Observable<Temperature> {
    return this.http.get<Temperature>(`${environment.api_url}/api/v1/temperatures?city=${city.city},${city.country}`);
  }
}
