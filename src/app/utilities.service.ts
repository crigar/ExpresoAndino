import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  configUrl = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json';

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get<any>(this.configUrl);
  }

  getData(states: any) {
    let data: any = [];
    const wheels = ['front-right', 'front-left', 'back-right', 'back-left'];
    const getWheelsToChange = () => {
      let wheelsToChange = [];
      const random = Math.random() * (3 - 0) + 0;
      for (let index = 0; index <= random; index++) {
        wheelsToChange.push(wheels[index]);
      }
      return wheelsToChange;
    }
    const randomDate =function(date1: any, date2: any){
      function getRandomArbitrary(min: any, max: any) {
        return Math.random() * (max - min) + min;
      }
      var date1 = date1 || '01-01-1970'
      var date2 = date2 || new Date().toLocaleDateString()
      date1 = new Date(date1).getTime()
      date2 = new Date(date2).getTime()
      if( date1>date2){
          return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
      } else{
          return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  
  
      }
  }

  for (const state of states) {
    for (const city of state.cities) {
      const random = Math.random() * (this.getCars().length - 0) + 0;
      data.push({
        city: city,
        state: state.id,
        buses: this.getCars().slice(0, random).map(car => {
          return {
            ...car,
            origin: 'COL',
            licensePlate: 'ABC123',
            wheelToChange: getWheelsToChange(),
            dateToChangeWheels: randomDate('02/13/2018', '02/13/2022')
          }
        })
      });
    }
  }
    
   return data;
  }

  getCars() {
    return [
      {
         "Name":"chevrolet chevelle malibu",
         "Miles_per_Gallon":18,
         "Cylinders":8,
         "Displacement":307,
         "Horsepower":130,
         "Weight_in_lbs":3504,
         "Acceleration":12,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"buick skylark 320",
         "Miles_per_Gallon":15,
         "Cylinders":8,
         "Displacement":350,
         "Horsepower":165,
         "Weight_in_lbs":3693,
         "Acceleration":11.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth satellite",
         "Miles_per_Gallon":18,
         "Cylinders":8,
         "Displacement":318,
         "Horsepower":150,
         "Weight_in_lbs":3436,
         "Acceleration":11,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"amc rebel sst",
         "Miles_per_Gallon":16,
         "Cylinders":8,
         "Displacement":304,
         "Horsepower":150,
         "Weight_in_lbs":3433,
         "Acceleration":12,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford torino",
         "Miles_per_Gallon":17,
         "Cylinders":8,
         "Displacement":302,
         "Horsepower":140,
         "Weight_in_lbs":3449,
         "Acceleration":10.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford galaxie 500",
         "Miles_per_Gallon":15,
         "Cylinders":8,
         "Displacement":429,
         "Horsepower":198,
         "Weight_in_lbs":4341,
         "Acceleration":10,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"chevrolet impala",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":454,
         "Horsepower":220,
         "Weight_in_lbs":4354,
         "Acceleration":9,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth fury iii",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":440,
         "Horsepower":215,
         "Weight_in_lbs":4312,
         "Acceleration":8.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"pontiac catalina",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":455,
         "Horsepower":225,
         "Weight_in_lbs":4425,
         "Acceleration":10,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"amc ambassador dpl",
         "Miles_per_Gallon":15,
         "Cylinders":8,
         "Displacement":390,
         "Horsepower":190,
         "Weight_in_lbs":3850,
         "Acceleration":8.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"citroen ds-21 pallas",
         "Miles_per_Gallon":null,
         "Cylinders":4,
         "Displacement":133,
         "Horsepower":115,
         "Weight_in_lbs":3090,
         "Acceleration":17.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"chevrolet chevelle concours (sw)",
         "Miles_per_Gallon":null,
         "Cylinders":8,
         "Displacement":350,
         "Horsepower":165,
         "Weight_in_lbs":4142,
         "Acceleration":11.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford torino (sw)",
         "Miles_per_Gallon":null,
         "Cylinders":8,
         "Displacement":351,
         "Horsepower":153,
         "Weight_in_lbs":4034,
         "Acceleration":11,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth satellite (sw)",
         "Miles_per_Gallon":null,
         "Cylinders":8,
         "Displacement":383,
         "Horsepower":175,
         "Weight_in_lbs":4166,
         "Acceleration":10.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"amc rebel sst (sw)",
         "Miles_per_Gallon":null,
         "Cylinders":8,
         "Displacement":360,
         "Horsepower":175,
         "Weight_in_lbs":3850,
         "Acceleration":11,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"dodge challenger se",
         "Miles_per_Gallon":15,
         "Cylinders":8,
         "Displacement":383,
         "Horsepower":170,
         "Weight_in_lbs":3563,
         "Acceleration":10,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth 'cuda 340",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":340,
         "Horsepower":160,
         "Weight_in_lbs":3609,
         "Acceleration":8,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford mustang boss 302",
         "Miles_per_Gallon":null,
         "Cylinders":8,
         "Displacement":302,
         "Horsepower":140,
         "Weight_in_lbs":3353,
         "Acceleration":8,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"chevrolet monte carlo",
         "Miles_per_Gallon":15,
         "Cylinders":8,
         "Displacement":400,
         "Horsepower":150,
         "Weight_in_lbs":3761,
         "Acceleration":9.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"buick estate wagon (sw)",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":455,
         "Horsepower":225,
         "Weight_in_lbs":3086,
         "Acceleration":10,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"toyota corona mark ii",
         "Miles_per_Gallon":24,
         "Cylinders":4,
         "Displacement":113,
         "Horsepower":95,
         "Weight_in_lbs":2372,
         "Acceleration":15,
         "Year":"1970-01-01",
         "Origin":"Japan"
      },
      {
         "Name":"plymouth duster",
         "Miles_per_Gallon":22,
         "Cylinders":6,
         "Displacement":198,
         "Horsepower":95,
         "Weight_in_lbs":2833,
         "Acceleration":15.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"amc hornet",
         "Miles_per_Gallon":18,
         "Cylinders":6,
         "Displacement":199,
         "Horsepower":97,
         "Weight_in_lbs":2774,
         "Acceleration":15.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford maverick",
         "Miles_per_Gallon":21,
         "Cylinders":6,
         "Displacement":200,
         "Horsepower":85,
         "Weight_in_lbs":2587,
         "Acceleration":16,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"datsun pl510",
         "Miles_per_Gallon":27,
         "Cylinders":4,
         "Displacement":97,
         "Horsepower":88,
         "Weight_in_lbs":2130,
         "Acceleration":14.5,
         "Year":"1970-01-01",
         "Origin":"Japan"
      },
      {
         "Name":"volkswagen 1131 deluxe sedan",
         "Miles_per_Gallon":26,
         "Cylinders":4,
         "Displacement":97,
         "Horsepower":46,
         "Weight_in_lbs":1835,
         "Acceleration":20.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"peugeot 504",
         "Miles_per_Gallon":25,
         "Cylinders":4,
         "Displacement":110,
         "Horsepower":87,
         "Weight_in_lbs":2672,
         "Acceleration":17.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"audi 100 ls",
         "Miles_per_Gallon":24,
         "Cylinders":4,
         "Displacement":107,
         "Horsepower":90,
         "Weight_in_lbs":2430,
         "Acceleration":14.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"saab 99e",
         "Miles_per_Gallon":25,
         "Cylinders":4,
         "Displacement":104,
         "Horsepower":95,
         "Weight_in_lbs":2375,
         "Acceleration":17.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"bmw 2002",
         "Miles_per_Gallon":26,
         "Cylinders":4,
         "Displacement":121,
         "Horsepower":113,
         "Weight_in_lbs":2234,
         "Acceleration":12.5,
         "Year":"1970-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"amc gremlin",
         "Miles_per_Gallon":21,
         "Cylinders":6,
         "Displacement":199,
         "Horsepower":90,
         "Weight_in_lbs":2648,
         "Acceleration":15,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford f250",
         "Miles_per_Gallon":10,
         "Cylinders":8,
         "Displacement":360,
         "Horsepower":215,
         "Weight_in_lbs":4615,
         "Acceleration":14,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"chevy c20",
         "Miles_per_Gallon":10,
         "Cylinders":8,
         "Displacement":307,
         "Horsepower":200,
         "Weight_in_lbs":4376,
         "Acceleration":15,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"dodge d200",
         "Miles_per_Gallon":11,
         "Cylinders":8,
         "Displacement":318,
         "Horsepower":210,
         "Weight_in_lbs":4382,
         "Acceleration":13.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"hi 1200d",
         "Miles_per_Gallon":9,
         "Cylinders":8,
         "Displacement":304,
         "Horsepower":193,
         "Weight_in_lbs":4732,
         "Acceleration":18.5,
         "Year":"1970-01-01",
         "Origin":"USA"
      },
      {
         "Name":"datsun pl510",
         "Miles_per_Gallon":27,
         "Cylinders":4,
         "Displacement":97,
         "Horsepower":88,
         "Weight_in_lbs":2130,
         "Acceleration":14.5,
         "Year":"1971-01-01",
         "Origin":"Japan"
      },
      {
         "Name":"chevrolet vega 2300",
         "Miles_per_Gallon":28,
         "Cylinders":4,
         "Displacement":140,
         "Horsepower":90,
         "Weight_in_lbs":2264,
         "Acceleration":15.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"toyota corona",
         "Miles_per_Gallon":25,
         "Cylinders":4,
         "Displacement":113,
         "Horsepower":95,
         "Weight_in_lbs":2228,
         "Acceleration":14,
         "Year":"1971-01-01",
         "Origin":"Japan"
      },
      {
         "Name":"ford pinto",
         "Miles_per_Gallon":25,
         "Cylinders":4,
         "Displacement":98,
         "Horsepower":null,
         "Weight_in_lbs":2046,
         "Acceleration":19,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"volkswagen super beetle 117",
         "Miles_per_Gallon":null,
         "Cylinders":4,
         "Displacement":97,
         "Horsepower":48,
         "Weight_in_lbs":1978,
         "Acceleration":20,
         "Year":"1971-01-01",
         "Origin":"Europe"
      },
      {
         "Name":"amc gremlin",
         "Miles_per_Gallon":19,
         "Cylinders":6,
         "Displacement":232,
         "Horsepower":100,
         "Weight_in_lbs":2634,
         "Acceleration":13,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth satellite custom",
         "Miles_per_Gallon":16,
         "Cylinders":6,
         "Displacement":225,
         "Horsepower":105,
         "Weight_in_lbs":3439,
         "Acceleration":15.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"chevrolet chevelle malibu",
         "Miles_per_Gallon":17,
         "Cylinders":6,
         "Displacement":250,
         "Horsepower":100,
         "Weight_in_lbs":3329,
         "Acceleration":15.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford torino 500",
         "Miles_per_Gallon":19,
         "Cylinders":6,
         "Displacement":250,
         "Horsepower":88,
         "Weight_in_lbs":3302,
         "Acceleration":15.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"amc matador",
         "Miles_per_Gallon":18,
         "Cylinders":6,
         "Displacement":232,
         "Horsepower":100,
         "Weight_in_lbs":3288,
         "Acceleration":15.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"chevrolet impala",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":350,
         "Horsepower":165,
         "Weight_in_lbs":4209,
         "Acceleration":12,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"pontiac catalina brougham",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":400,
         "Horsepower":175,
         "Weight_in_lbs":4464,
         "Acceleration":11.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford galaxie 500",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":351,
         "Horsepower":153,
         "Weight_in_lbs":4154,
         "Acceleration":13.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"plymouth fury iii",
         "Miles_per_Gallon":14,
         "Cylinders":8,
         "Displacement":318,
         "Horsepower":150,
         "Weight_in_lbs":4096,
         "Acceleration":13,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"dodge monaco (sw)",
         "Miles_per_Gallon":12,
         "Cylinders":8,
         "Displacement":383,
         "Horsepower":180,
         "Weight_in_lbs":4955,
         "Acceleration":11.5,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"ford country squire (sw)",
         "Miles_per_Gallon":13,
         "Cylinders":8,
         "Displacement":400,
         "Horsepower":170,
         "Weight_in_lbs":4746,
         "Acceleration":12,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
      {
         "Name":"pontiac safari (sw)",
         "Miles_per_Gallon":13,
         "Cylinders":8,
         "Displacement":400,
         "Horsepower":175,
         "Weight_in_lbs":5140,
         "Acceleration":12,
         "Year":"1971-01-01",
         "Origin":"USA"
      },
   ]
  }
}
