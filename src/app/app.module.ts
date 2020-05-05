import { CustomMaterialModule } from './../custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceDisplayComponent } from './components/balance-display/balance-display.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsItemComponent } from './components/transactions-item/transactions-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BalanceDisplayComponent,
    TransactionsListComponent,
    TransactionsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
