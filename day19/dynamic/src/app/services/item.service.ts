import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseURL = 'http://localhost:3001/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  addItem(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }

  updateItem(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
