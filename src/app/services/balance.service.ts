import { BalanceApi } from './../api/balance.api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BalanceService {
  constructor(private api: BalanceApi) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(typeof error.error, error.error);
    }
    return throwError(error.error);
  }

  getBalance(): Observable<number> {
    return this.api.getBalance().pipe(catchError(this.handleError));
  }
}
