import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {SignInRequest} from "../../../auth/model/sign-in.request";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{
  form={
    username: '',
    password: ''
  }
  submitted = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    console.log(this.form);
    console.log('btoton presionado');

    //if (this.form.invalid) return;
    let username = this.form.username;
    let password = this.form.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;

  }
}
