export class Vehicle {
  name: string;
  description: string;
  url: string;

  constructor(vehicle:{
    name?: string,
    description?: string,
    url?: string}){
    this.name = vehicle.name || '';
    this.description = vehicle.description || '';
    this.url = vehicle.url || '';
  }



}
