import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  options = [
    {path: '/myVehicles', title: 'My Vehicles'},
    {path: '/postVehicle', title: 'Post Vehicle'},
    {path:'/vehicleHistory', title: 'Vehicle History'},
    {path:'/contactForum', title: 'Contact Forum'},
    {path:'/sellerProfile', title: 'Seller Profile'}
  ]

}
