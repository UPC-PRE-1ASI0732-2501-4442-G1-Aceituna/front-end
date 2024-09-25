import {Injectable} from '@angular/core';
import {Profile} from "../model/profile";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService extends BaseService<Profile>{

  constructor() {
    super();
    this.resourceEndPoint = '/profile';
  }
}
