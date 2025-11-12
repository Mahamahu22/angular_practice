import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  getUsers(): Observable<{id:number, name:string, email:string}[]> {
    const users = [
      {id:1, name:'Maha', email:'maha@example.com'},
      {id:2, name:'Lakshmi', email:'lakshmi@example.com'},
      {id:3, name:'Charlie', email:'charlie@example.com'}
    ];

    return new Observable(observer => {
      let i = 0;
      const interval = setInterval(() => {
        if(i < users.length) {
          observer.next([users[i]]);
          i++;
        } else {
          observer.complete();
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
