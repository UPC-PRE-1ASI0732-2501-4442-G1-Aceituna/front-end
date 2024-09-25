import { Component } from '@angular/core';
import {MatButton, MatAnchor} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-acquirer',
  standalone: true,
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './header-acquirer.component.html',
  styleUrl: './header-acquirer.component.css'
})
export class HeaderAcquirerComponent {
  options = [
    {path: '/home', title: 'Home'},
    {path: '/interactiveMap', title: 'Map'},
    {path:'/filter', title: 'Filter'},
    {path:'/vehicleDetailsAcquirer', title: 'Badges'},
    {path:'/historyAcquirer', title: 'History'},
    {path: '/contactAcquirer', title: 'Contact Forum'},
    {path: '/profileAdquiriente', title: 'My Profile'},
    {path: '/editProfileAcquirer', title: 'Edit Profile'},
  ]
  optionsLogin = [
    {path:'/login', title: 'Log Out'}
  ]

}
