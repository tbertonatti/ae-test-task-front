import { Transaction } from '../interfaces/transaction.interface';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionsApi {
  private url = `${environment.url}/transactions`;
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
  }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    return this.http.post<Transaction>(this.url, transaction);
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.url}/${id}`);
  }
}
