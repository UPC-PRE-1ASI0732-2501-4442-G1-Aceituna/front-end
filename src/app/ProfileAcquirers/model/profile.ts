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

