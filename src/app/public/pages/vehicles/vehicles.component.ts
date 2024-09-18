import {Component, Input} from '@angular/core';
import {Vehicle} from "../../../movilizing/model/vehicle.entity";

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
@Input() vehicle!: Vehicle;
}
