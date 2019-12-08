import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/_models/city';
import { CityService } from 'src/app/_services/city/city.service';
import * as _ from 'lodash';
import { JwtStorage } from 'src/app/_storages/jwt.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities: City[] = [];
  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit() {
    this.cityService.all().subscribe(resp => {
      this.cities = resp;
    })
  }

  addCity(city: City) {
    this.cities.push(city)
  }

  remove(id) {
    this.cities = _.filter(this.cities, (c) => c.id !== id);
  }

  logout() {
    localStorage.removeItem(JwtStorage);
    this.router.navigateByUrl('/login');
  }
}
