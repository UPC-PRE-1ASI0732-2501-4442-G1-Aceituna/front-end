import {Component, inject, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../../movilizing/model/vehicle.entity";
import {VehicleService} from "../../../movilizing/services/vehicle.service";
import {NgForOf} from "@angular/common";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    NgForOf,
    MatCardImage
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnInit {
  protected vehicleData: Vehicle[] = [];
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);

  getLogoUrl(url: string) {
    return this.Logo.getUrlToLogo(url);
  }


  ngOnInit(): void {
    this.getAllVehicles();
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: Vehicle[]) => {
      console.log(response);
      this.vehicleData = response;  // Asigna la respuesta (que es un arreglo) a vehicleData
    });
  }

  //posibleadd
  public addVehicle(newVehicle: Vehicle): void {
    this.vehicleService.create(newVehicle).subscribe({
      next: (response: Vehicle) => {
        this.vehicleData = [...this.vehicleData, response];
      },
      error: (err) => {
        console.error('Error creating vehicle:', err);
      }
    });
  }

}
