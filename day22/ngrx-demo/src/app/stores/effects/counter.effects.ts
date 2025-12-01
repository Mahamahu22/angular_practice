import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increment, incrementBy } from '../actions/counter.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) {}

  
  bonusIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(() => incrementBy({ value: 5 }))
    )
  );
}
