import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BalanceApi {
  private url = `${environment.url}/balance`;
  constructor(private http: HttpClient) { }

  getBalance(): Observable<number> {
    return this.http.get<number>(this.url);
  }
}
