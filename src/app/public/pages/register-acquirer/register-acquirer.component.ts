import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {SignUpRequest} from "../../../auth/model/sign-up.request";
import {FormsModule} from "@angular/forms";
import {ProfileAccountService} from "../../../ProfileAcquirers/services/profile-account.service";

@Component({
  selector: 'app-register-acquirer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './register-acquirer.component.html',
  styleUrl: './register-acquirer.component.css'
})
export class RegisterAcquirerComponent implements OnInit {

  form = {
    username: '',
    password: '',
    email: '',
    role: [] as string[]
  }
  profile = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }

  submitted: boolean = false;
  constructor(private authenticationService: AuthenticationService, private profileAccountService: ProfileAccountService) { }
  ngOnInit(): void {
    this.form.role.push('ROLE_ADMIN');
  }
  onSubmit(): void {
   // if (this.form.invalid) return;
    let username = this.form.username;
    let password = this.form.password;
    let email = this.form.email;
    const signUpRequest = new SignUpRequest(username, password, email);
    this.authenticationService.signUp(signUpRequest);
    this.profile.firstName=username;
    this.profile.lastName=username;
    this.profile.email=email;
    this.profile.phoneNumber='000000000';
    this.profileAccountService.addAccount(this.profile);
    this.submitted = true;
  }
}
