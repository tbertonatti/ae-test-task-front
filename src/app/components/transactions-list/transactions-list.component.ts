import { TransactionsService } from './../../services/transactions.service';
import { Transaction } from './../../interfaces/transaction.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  loading: boolean;
  transactions: Partial<Transaction>[];
  error: boolean;
  constructor(private ts: TransactionsService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.loading = true;
    this.ts.getTransactions().subscribe(ts => {
      this.loading = false;
      this.error = false;
      this.transactions = ts;
    }, e => {
      this.loading = false;
      this.error = true;
    });
  }
}
