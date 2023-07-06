import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, user);
  }
}
