import { Injectable } from '@angular/core';
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
