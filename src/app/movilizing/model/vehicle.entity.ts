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

  /**
   * "name": "BMX Pro",
   *       "type": "Bicicleta",
   *       "Year": "2021",
   *       "salePrice": 200,
   *       "rentailPrice": 20,
   *       "description": "Bicicleta BMX diseñada para hacer trucos y saltos extremos.",
   *       "url": "https://bmx.com"
   */


}
