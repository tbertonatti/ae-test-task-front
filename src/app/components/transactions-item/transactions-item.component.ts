import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-transactions-item',
  templateUrl: './transactions-item.component.html',
  styleUrls: ['./transactions-item.component.scss']
})
export class TransactionsItemComponent implements OnInit {
  @Input() id: string;
  loading: boolean;
  transaction: Transaction;
  error: boolean;
  constructor(private ts: TransactionsService) { }

  ngOnInit(): void {
    this.loadTransaction();
  }

  loadTransaction() {
    this.loading = true;
    this.ts.getTransaction(this.id).subscribe(t => {
      this.loading = false;
      this.error = false;
      this.transaction = t;
    }, e => {
      this.loading = false;
      this.error = true;
    });
  }

  showDate = (d: string) => new Date(d).toLocaleString();
}
