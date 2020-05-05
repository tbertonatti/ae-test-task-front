import { BalanceService } from './../../services/balance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.sass']
})
export class BalanceDisplayComponent implements OnInit {
  loading: boolean;
  balance: number;
  error: boolean;
  constructor(private bs: BalanceService) { }

  ngOnInit(): void {
    this.loadBalance();
  }

  loadBalance() {
    this.loading = true;
    this.bs.getBalance().subscribe(b => {
      this.loading = false;
      this.error = false;
      this.balance = b;
    }, e => {
      this.loading = false;
      this.error = true;
    });
  }
}
