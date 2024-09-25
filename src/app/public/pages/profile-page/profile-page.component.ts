import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Profile} from "../../../ProfileAcquirers/model/profile";
import {ProfileApiService} from "../../../ProfileAcquirers/services/profile-api.service";
import {ProfileComponent} from "../../../ProfileAcquirers/components/profile/profile.component";
import {ConfirmationComponent} from "../../../ProfileAcquirers/components/confirmation/confirmation.component";
import {UserService} from "../../../auth/services/user.service";
import {User} from "../../../auth/model/user.entity";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ProfileComponent,
    ConfirmationComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  user: any;
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe(data => {
      this.user = data;
    });
  }

  userChange(updatedUser: any) {
    this.userService.updateUser(this.user.id, updatedUser).subscribe((data: any) => {
      console.log('Usuario actualizado:', data);

      this.confirmation.message = 'Datos actualizados correctamente!';
      this.confirmation.show();
    });
  }
}
