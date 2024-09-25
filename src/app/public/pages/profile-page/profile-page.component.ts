import {Component, inject, ViewChild} from '@angular/core';
import {Profile} from "../../../ProfileAcquirers/model/profile";
import {ProfileApiService} from "../../../ProfileAcquirers/services/profile-api.service";
import {ProfileComponent} from "../../../ProfileAcquirers/components/profile/profile.component";
import {ConfirmationComponent} from "../../../ProfileAcquirers/components/confirmation/confirmation.component";

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
export class ProfilePageComponent {
  profile!: Profile;
  private profileApi: ProfileApiService = inject(ProfileApiService);
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor() {
    this.profile = new Profile({id:1});
  }

  profileChange(profile: Profile) {
    this.profile = profile;
    this.profileApi.update(this.profile.id, this.profile).subscribe((data: Profile) => {
      console.log(data);
    })
    this.confirmation.message = 'Datos actualizados correctamente!';
    this.confirmation.show();
  }
}
