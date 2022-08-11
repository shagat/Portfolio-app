import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { tap, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleError = (errorRes: any) => {
  let errorMsg = 'Unexpected error occured!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticateFail({ errorMessage: errorMsg }));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMsg = 'This email is already in use.';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMsg = 'This email is not valid.';
      break;
    case 'INVALID_PASSWORD':
      errorMsg = 'The password is incorrect.';
      break;
  }
  return of(AuthActions.authenticateFail({ errorMessage: errorMsg }));
};

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  authLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.clearLogoutTimer();
          localStorage.removeItem('userData');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
