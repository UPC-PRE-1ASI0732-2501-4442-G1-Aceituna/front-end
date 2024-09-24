import { Routes } from '@angular/router';
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./public/pages/vehicle-post/vehicle-post.component";
import {ProfileUniversityComponent} from "./public/pages/profile-university/profile-university.component";

export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent},
  {path: 'postVehicle', component: VehiclePostComponent},
  {path: 'profile', component: ProfileUniversityComponent}
];
