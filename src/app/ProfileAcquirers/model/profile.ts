/**
 * Profile entity
 * @class Profile
 * @description
 * This class is used to represent a profile.
 * It contains the following properties:
 * @property id: string - The ID of the profile.
 * @property name: string - The name of the profile.
 * @property email: string - The mail of the profile.
  * @property phone: string - The phone of the profile.
 * @property image: string - The image of the profile.
 */

export class Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  image : string;

  constructor(profile:{
    id?: number,
    name?: string,
    email?: string,
    phone?: string,
    image?: string}) {
    this.id = profile.id || 0;
    this.name = profile.name || "";
    this.email = profile.email || "";
    this.phone = profile.phone || "";
    this.image = profile.image || "";
  }

}

