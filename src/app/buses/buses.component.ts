import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from '../interfaces/city';
import { PeriodicElement } from '../interfaces/periodic-element';
import { State } from '../interfaces/state';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss'],
})
export class BusesComponent implements OnInit {
  
  state: number = 0;
  city: number = 0;
  start: string = '';
  end: string = '';
  states: State[] = [];
  cities: City[] = [];
  data: any = [];
  buses: any = [];

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.utilitiesService.getStates().subscribe((data: any) => {
      this.states = data.map((state: any) => {
        return {
          id: state.id,
          name: state.departamento,
          cities: state.ciudades
        }
      })
      this.data = this.utilitiesService.getData(this.states);
      console.log(data);
    });
      
    
  }

  changeState(stateId: number) {
    this.cities = this.states.filter(state => state.id === stateId)[0].cities.map((city, index) => {
      return {
        id: index,
        name: city,
        state: stateId
      }
    })
  }

  search() {
    this.buses = [];
    this.data = this.data.filter((element: any) => {
      if(element.state === this.state && element.city === this.city ) {
        return element.buses;
      } 
    });
    for (const element of this.data) {
      this.buses = this.buses.concat(element.buses);
    }
    this.buses = this.buses.filter((bus: any) => {
      const dateToChangeWheels = new Date(bus.dateToChangeWheels);
      const start = new Date(this.start);
      const end = new Date(this.end);
      if(dateToChangeWheels > start && dateToChangeWheels < end) return bus
    })
    console.log(this.buses)
  }

}
