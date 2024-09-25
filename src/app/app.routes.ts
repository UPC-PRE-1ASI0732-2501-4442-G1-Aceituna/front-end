import { Routes } from '@angular/router';
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./public/pages/vehicle-post/vehicle-post.component";
import {ProfilePageComponent} from "./public/pages/profile-page/profile-page.component";
import {DashboardPageComponent} from "./public/pages/dashboard-page/dashboard-page.component";
import {PlanesPageComponent} from "./public/pages/planes-page/planes-page.component";
import {PaymentPageComponent} from "./public/pages/payment-page/payment-page.component";
import {ProfileUniversityComponent} from "./public/pages/profile-university/profile-university.component";

export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent},
  {path: 'postVehicle', component: VehiclePostComponent},
  { path: 'plans', component: PlanesPageComponent},
  {path: '', redirectTo: 'plans', pathMatch: 'full'},
  {path: 'sellerProfile', component: ProfileUniversityComponent},
  {path: 'sellereditProfile', component: ProfilePageComponent},
  {path: 'dashboard', component: DashboardPageComponent,
    children:[
      {
        path: 'profile', // Rutas hijas
        component: ProfilePageComponent
      }
    ]
  },
  { path: 'payment', component: PaymentPageComponent }, // Ruta para "payment"
];
