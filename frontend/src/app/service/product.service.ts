import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string;
  private productReturn: string;
  private userProducts: string;


  constructor(private http: HttpClient) {
    this.productUrl = 'http://localhost:8090/api/products';
    this.productReturn = 'http://localhost:8090/api/products/';
    this.userProducts = 'http://localhost:8090/api/products/user/'
  }

  findOne(id: number): Observable<Product> {
    return this.http.get(this.productReturn + id).pipe(
      map((product: Product) => product)
    );
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '/');
  }

  public save(formdata: FormData) {
    return this.http.post<Product>(this.productUrl, formdata);
  }

  public findUserProducts(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.userProducts + userId);
  }
}
