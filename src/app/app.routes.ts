import { Routes } from '@angular/router';
import {VehiclesComponent} from "./movilizing/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./movilizing/pages/vehicle-post/vehicle-post.component";
import {ProfilePageComponent} from "./ProfileAcquirers/pages/profile-page/profile-page.component";
import {DashboardPageComponent} from "./public/pages/dashboard-page/dashboard-page.component";
import {PlanesPageComponent} from "./SelectionPlanes/pages/planes-page/planes-page.component";
import {PaymentPageComponent} from "./SelectionPlanes/pages/payment-page/payment-page.component";
import {ProfileUniversityComponent} from "./public/pages/profile-university/profile-university.component";
import {RegisterAcquirerComponent} from "./ProfileAcquirers/pages/register-acquirer/register-acquirer.component";
import {LogInComponent} from "./auth/pages/log-in/log-in.component";
import {
  RegisterUniversityStudentComponent
} from "./public/pages/register-university-student/register-university-student.component";
import {VehicleDetailsComponent} from "./movilizing/pages/vehicle-details/vehicle-details.component";
import {HomeAcquirerComponent} from "./ProfileAcquirers/pages/home-acquirer/home-acquirer.component";
import {InteractiveMapComponent} from "./public/pages/interactive-map/interactive-map.component";
import {FilterAcquirerComponent} from "./ProfileAcquirers/pages/filter-acquirer/filter-acquirer.component";
import {
  VehicleDetailsAcquirerComponent
} from "./movilizing/pages/vehicle-details-acquirer/vehicle-details-acquirer.component";
import {ProfileAcquirerComponent} from "./ProfileAcquirers/pages/profile-acquirer/profile-acquirer.component";
import {EditProfileAcquirerComponent} from "./ProfileAcquirers/pages/edit-profile-acquirer/edit-profile-acquirer.component";
import {authenticationGuard} from "./auth/services/authentication.guard";
import {ElectionComponent} from "./public/pages/election/election.component";


export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent, canActivate: [authenticationGuard]},
  {path: 'postVehicle', component: VehiclePostComponent, canActivate: [authenticationGuard]},
  {path: 'vehicleDetails', component: VehicleDetailsComponent, canActivate: [authenticationGuard]},
  { path: 'plans', component: PlanesPageComponent, canActivate: [authenticationGuard]},
  {path: 'login', component: LogInComponent},
  {path: 'election', component: ElectionComponent},
  {path: 'registerUniversity', component: RegisterUniversityStudentComponent},
  {path: 'registerAcquirer', component: RegisterAcquirerComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sellerProfile', component: ProfileUniversityComponent, canActivate: [authenticationGuard]},
  {path: 'sellereditProfile', component: ProfilePageComponent, canActivate: [authenticationGuard]},
  {path: 'dashboard', component: DashboardPageComponent,
    children:[
      {
        path: 'plans', // Rutas hijas
        component: ProfilePageComponent

      },
      {
        path: '', // Ruta hija por defecto cuando no hay path
        redirectTo: 'myVehicles', // Redirige a /dashboard/profile
        pathMatch: 'full'
      }
    ]
    , canActivate: [authenticationGuard]
  },
  { path: 'payment', component: PaymentPageComponent , canActivate: [authenticationGuard]}, // Ruta para "payment"
  {path: 'home', component: HomeAcquirerComponent, canActivate: [authenticationGuard]},//, canActivate: [authenticationGuard]
  {path: 'interactiveMap', component: InteractiveMapComponent, canActivate: [authenticationGuard]},
  {path: 'filter', component: FilterAcquirerComponent, canActivate: [authenticationGuard]},
  { path: 'vehicleDetailsAcquirer/:id', component: VehicleDetailsAcquirerComponent, canActivate: [authenticationGuard] },
  {path: 'profileAdquiriente', component: ProfileAcquirerComponent, canActivate: [authenticationGuard]},
  {path: 'editProfileAcquirer', component: EditProfileAcquirerComponent, canActivate: [authenticationGuard]},
];
