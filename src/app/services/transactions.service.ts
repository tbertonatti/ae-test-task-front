import { TransactionsApi } from './../api/transactions.api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  constructor(private api: TransactionsApi) { }

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

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    return this.api.createTransaction(transaction);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.api.getTransactions().pipe(catchError(this.handleError));
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.api.getTransaction(id).pipe(catchError(this.handleError));
  }
}
