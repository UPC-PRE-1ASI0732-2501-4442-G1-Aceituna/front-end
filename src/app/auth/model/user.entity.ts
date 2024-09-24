export class User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  ruc: string;
  role: string;
  url: string;
  apiId: string;

  constructor(id: number, firstName: string, lastName: string, phone: string, email: string, password: string, ruc: string, role: string, url: string, apiId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.ruc = ruc;
    this.role = role;
    this.url = url;
    this.apiId = apiId;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  isSubscribed(): boolean {
    return this.role === 'student';
  }

  formatPhoneNumber(): string {
    const cleaned = this.phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return this.phone;
  }
}
