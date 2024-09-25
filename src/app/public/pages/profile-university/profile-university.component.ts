import {Component, inject, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {UserService} from "../../../auth/services/user.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
@Component({
  selector: 'app-profile-university',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardAvatar,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatCheckbox
  ],
  templateUrl: './profile-university.component.html',
  styleUrl: './profile-university.component.css'
})

export class ProfileUniversityComponent implements OnInit {
  private Logo = inject(LogoApiService);
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.users = data; // Asumiendo que el JSON tiene una propiedad `users`
    });
  }
  getLogoUrl(url: string | undefined) {
    return this.Logo.getUrlToLogo(url);
  }
}
