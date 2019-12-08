import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { City } from 'src/app/_models/city';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureService } from 'src/app/_services/temperature/temperature.service';

@Component({
  selector: 'shared-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  @Output() city: EventEmitter<City> = new EventEmitter<City>();  
  frmGroup: FormGroup;

  constructor(private temperatureService: TemperatureService, private formBuilder: FormBuilder) {
    this.frmGroup = this.formBuilder.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  get f() { return this.frmGroup.controls; }

  ngOnInit() {
  }

  onSubmit() {
    this.temperatureService.find(this.frmGroup.value).subscribe(resp => {    
      
      let city = new City();
      let value = this.frmGroup.value;
      
      city.country = value.country;
      city.city = value.city;
      city.temperature = resp;

      this.city.emit(city);    
    });
  }

}
