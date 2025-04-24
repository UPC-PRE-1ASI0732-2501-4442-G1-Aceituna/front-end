import { Component, inject, OnInit } from '@angular/core';
import { Vehicle } from '../../../movilizing/model/vehicle.entity';
import { VehicleService } from '../../../movilizing/services/vehicle.service';
import { LogoApiService } from '../../../shared/services/logo-api.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {HeaderAcquirerComponent} from "../../../public/components/header-acquirer/header-acquirer.component";
import {TranslateModule} from "@ngx-translate/core";
import {HeaderComponent} from "../../../public/components/header/header.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-filter-acquirer',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    TranslateModule,
    HeaderAcquirerComponent,
    HeaderComponent,
    NgIf,
    RouterLink

  ],
  templateUrl: './filter-acquirer.component.html',
  styleUrls: ['./filter-acquirer.component.css']
})
export class FilterAcquirerComponent implements OnInit {

  public vehicleData: Vehicle[] = [];
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);

  selectedType: string = 'All types';
  selectedPrice: string = 'Lowest to Highest';

  types: string[] = ['All types', 'Scooter', 'Electric bicycle', 'Skateboard', 'Bicycle'];

  getLogoUrl(url: string) {
    return this.Logo.getUrlToLogo(url);
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: Vehicle[]) => {
      this.vehicleData = response;
    });
  }

  // Función para filtrar por tipo de vehículo
  onTypeChange(type: string) {
    this.selectedType = type;

    if (type === 'All types') {
      this.getAllVehicles();
    } else {
      this.vehicleService.getByType(type).subscribe((response: Vehicle[]) => {
        this.vehicleData = response;
      });
    }
  }

  // Función para ordenar por precio
  onPriceChange(price: string) {
    this.selectedPrice = price;

    if (price === 'Lowest to Highest') {
      this.vehicleData.sort((a, b) => a.priceSell - b.priceSell);
    } else {
      this.vehicleData.sort((a, b) => b.priceSell - a.priceSell);
    }
  }
}
