import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from 'src/app/_models/city';
import { TemperatureService } from 'src/app/_services/temperature/temperature.service';
import * as _ from 'lodash';
import { CityService } from 'src/app/_services/city/city.service';

@Component({
  selector: 'shared-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city: City;
  @Output() deleted: EventEmitter<number> = new EventEmitter<number>();  
  _city: City;
  constructor(private temperatureService: TemperatureService, private cityService: CityService) { }

  ngOnInit() {
    console.log(this.city)
    this._city = _.cloneDeep(this.city);
    if (!this.city.temperature) this.loadTemp();
  }

  loadTemp() {
    this.temperatureService.find(this.city).subscribe(resp => {      
      this._city.temperature = resp;
      console.log(this._city)
    })
  }

  save() {
    this.cityService.create(this.city).subscribe(resp => {
      this._city.id = resp.id;
    })
  }

  delete() {
    this.cityService.delete(this._city.id).subscribe(resp => {
      this.deleted.emit(this._city.id)
    })
  }

}
