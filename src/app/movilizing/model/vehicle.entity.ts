/**
 * Vehicle entity
 * @class Vehicle
 * @description
 * This class is used to represent a vehicle.
 * It contains the following properties:
 * @property id: string - The ID of the vehicle.
 * @property name: string - The name of the vehicle.
 * @property type: string - The type of the vehicle.
 * @property year: string - The year of the vehicle.
 * @property salePrice: number - The sale price of the vehicle.
 * @property rentailPrice: number - The rental price of the vehicle.
 * @property description: string - The description of the vehicle.
 * @property url: string - The URL of the vehicle.
 * @property lat: number - The latitude of the vehicle.
 * @property lng: number - The longitude of the vehicle.
 */


export class Vehicle {
  id: number;
  name: string;
  type: string;
  year: string;
  salePrice: number;
  rentailPrice: number;
  description: string;
  url: string;
    lat: number;
    lng: number;

  constructor(vehicle:{
    id?: number,
    name?: string,
    type?: string,
    year?: string,
    salePrice?: number,
    rentailPrice?: number,
    description?: string,
    url?: string,
    lat?: number,
    lng?: number
  }){
    this.id = vehicle.id || 0;
    this.name = vehicle.name || '';
    this.type = vehicle.type || '';
    this.year = vehicle.year || '';
    this.salePrice = vehicle.salePrice || 0;
    this.rentailPrice = vehicle.rentailPrice || 0;
    this.description = vehicle.description || '';
    this.url = vehicle.url || 'https://bmx.com';
    this.lat = vehicle.lat || 0;
    this.lng = vehicle.lng || 0;
  }



}
