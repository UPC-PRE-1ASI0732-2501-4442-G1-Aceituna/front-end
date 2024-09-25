import {Injectable, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanesApiService {
  private specificCategory: string  = 'planes';
  private baseUrl: string = 'https://my-json-server.typicode.com/Open-Source-SW56-Group-2-EcoMovil/Json-Server-EcoMovil';
  private http: HttpClient = inject(HttpClient);

  /**
   * @method getSources
   * @description
   * Fetches the university.
   * @returns An observable of the Universities.
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/${this.specificCategory}`);
  }

  /**
   * @method initUniversities
   * @description
   * Initializes the universities.
   * @returns An observable of the universities.
   */
  initUniversities() {
    return this.getSources();
  }
}
