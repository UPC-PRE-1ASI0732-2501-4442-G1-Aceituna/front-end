import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {ProfileComponent} from "../../../ProfileAcquirers/components/profile/profile.component";
import {ConfirmationComponent} from "../../../ProfileAcquirers/components/confirmation/confirmation.component";
import {HeaderComponent} from "../../components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ProfileComponent,
    ConfirmationComponent,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  user: any;
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getbyId(1).subscribe(data => {
      this.user = data;
    });
  }

  userChange(updatedUser: any) {
    this.userService.update(this.user.id, updatedUser).subscribe((data: any) => {
      console.log('Usuario actualizado:', data);

      this.confirmation.message = 'Datos actualizados correctamente!';
      this.confirmation.show();
    });
  }
}
