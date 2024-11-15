import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-register-acquirer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink
  ],
  templateUrl: './register-acquirer.component.html',
  styleUrl: './register-acquirer.component.css'
})
export class RegisterAcquirerComponent {

}
