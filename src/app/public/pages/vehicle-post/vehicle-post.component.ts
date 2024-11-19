import {Component, inject, OnInit} from '@angular/core';
import {MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {Vehicle} from "../../../movilizing/model/vehicle.entity";
import {VehicleService} from "../../../movilizing/services/vehicle.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {FormsModule} from "@angular/forms";
import {MatMenuItem} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../../components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-vehicle-post',
  standalone: true,
  imports: [
    MatCardImage,
    NgForOf,
    FormsModule,
    NgIf,
    MatMenuItem,
    RouterLink,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './vehicle-post.component.html',
  styleUrl: './vehicle-post.component.css'
})
export class VehiclePostComponent implements OnInit {
  protected vehicleData: Vehicle[] = [];
  public newVehicle: Vehicle = new Vehicle({});
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);
  private router = inject(Router);

  options = [
    {path: '/myVehicles', title: 'My Vehicles'}]

  constructor() {}




  ngOnInit(): void {
    this.getAllVehicles();
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: Vehicle[]) => {
      console.log(response);
      this.vehicleData = response;
    });
  }
//add new vehicle
  private getCurrentLocation(): Promise<{ lat: number, lng: number }> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error', error);
            reject(error);
          }
        );
      } else {
        reject('Geolocalización no soportada');
      }
    });
  }

  public onClick(): void {
    if (this.newVehicle.description && this.newVehicle.type && this.newVehicle.year && this.newVehicle.priceSell && this.newVehicle.priceRent && this.newVehicle.name) {
      this.getCurrentLocation().then((coords) => {
        this.newVehicle.lat = coords.lat;
        this.newVehicle.lng = coords.lng;
        this.newVehicle.imageUrl = this.newVehicle.imageUrl || 'https://default-url.com';

        this.vehicleService.create(this.newVehicle).subscribe({
          next: (response: Vehicle) => {
            this.vehicleData = [...this.vehicleData, response];
            this.newVehicle = new Vehicle({});
            this.router.navigate(['/myVehicles']).then();
          },
          error: (err) => {
            console.error('Error creando el vehículo:', err);
          }
        });
      }).catch((error) => {
        console.error('Error al obtener la ubicación: ', error);
      });
    }
  }
}
