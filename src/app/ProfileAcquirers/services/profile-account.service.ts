import { Injectable } from '@angular/core';
import {ProfileApiService} from "./profile-api.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileAccountService {
  profile = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }

  constructor() { }

  public addAccount(data: any) {
    this.profile=data;
  }
  public getProfile(){
    return this.profile;
  }
}
