export interface Transaction {
  ID: string;
  Type: 'debit' | 'credit';
  Description: string;
  Amount: number;
  EffectiveDate: string;
}
