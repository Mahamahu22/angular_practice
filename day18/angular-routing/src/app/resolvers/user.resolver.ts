import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User, UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | undefined> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User | undefined> {
    const id = Number(route.paramMap.get('id'));
    return this.userService.getUser(id).pipe(
      catchError(() => {
        this.router.navigate(['/users']); 
        return of(undefined);
      })
    );
  }
}
