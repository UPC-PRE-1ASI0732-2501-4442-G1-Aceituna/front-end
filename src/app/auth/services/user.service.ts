import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://my-json-server.typicode.com/Open-Source-SW56-Group-2-EcoMovil/Json-Server-EcoMovil';

  constructor(private http: HttpClient) { }

  /**
   * @method getUser
   * @description
   * Fetches the user.
   */

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  /**
   * @method updateUser
   * @param id
   * @param user
   * @description
   * Updates the user.
   */

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, user);
  }

  /**
   * @method deleteUser
   * @param id
   * @description
   * Deletes the user.
   */

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  /**
   * @method getUserById
   * @description
   * Fetches the user by id.
   * @param id
   */
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }
}
