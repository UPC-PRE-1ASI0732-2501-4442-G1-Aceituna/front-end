import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {Profile} from "../../model/profile";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],  // Importa los formularios reactivos directamente en el componente
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() profile!: Profile;
  @Output() profileChange = new EventEmitter<Profile>();

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor() {
    this.profile = new Profile({id: 1});
  }

  onSubmit() {
    this.updateProfile();
    this.profileChange.emit(this.profile);
  }

  updateProfile(){
    this.profile.name = this.profileForm.get('name')?.value ?? '';
    this.profile.email = this.profileForm.get('email')?.value ?? '';
    this.profile.phone = this.profileForm.get('phone')?.value ?? '';
  }
}
