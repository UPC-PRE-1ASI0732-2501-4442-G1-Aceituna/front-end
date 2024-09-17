import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header-acquirer',
  standalone: true,
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './header-acquirer.component.html',
  styleUrl: './header-acquirer.component.css'
})
export class HeaderAcquirerComponent {

}
