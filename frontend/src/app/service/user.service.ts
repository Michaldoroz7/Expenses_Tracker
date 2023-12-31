import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private userReturn: string;
  private userProducts: string;



  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
    this.userReturn = 'http://localhost:8090/users/';
    this.userReturn = 'http://localhost:8090/products/user/';

  }

  findOne(id: number): Observable<User> {
    return this.http.get(this.userReturn + id).pipe(
      map((user: User) => user)
    );
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/');
  }

  public save(formdata: FormData) {
    return this.http.post<User>(this.usersUrl, formdata);
  }

  public findUserProducts(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.userProducts + userId);
  }
}
