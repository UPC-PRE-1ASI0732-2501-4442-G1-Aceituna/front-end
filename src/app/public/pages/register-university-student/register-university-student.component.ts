import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {SignUpRequest} from "../../../auth/model/sign-up.request";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register-university-student',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './register-university-student.component.html',
  styleUrl: './register-university-student.component.css'
})
export class RegisterUniversityStudentComponent implements OnInit {
  form = {
    username: '',
    password: '',
    email: '',
    role: [] as string[],
    ruc: ''
  }
  submitted: boolean = false;
  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    this.form.role.push('ROLE_USER');
  }
  onSubmit(): void {
    // if (this.form.invalid) return;
    let username = this.form.username;
    let password = this.form.password;
    let email = this.form.email;
    let ruc = this.form.ruc;
    const signUpRequest = new SignUpRequest(username, password, email);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }
}
