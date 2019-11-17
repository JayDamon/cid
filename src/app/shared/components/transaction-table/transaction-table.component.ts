import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';
import { Transaction } from '../../models/Transaction';


@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent {

  transactionService: TransactionService;
  transactions: MatTableDataSource<Transaction>;
  columnsToDisplay: String[] = 
      ['date', 'accountName', 'transactionCategory', 'description', 'amount'];

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
    this.addTransactions();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  addTransactions() {
    this.transactionService.getTransactions().subscribe((transactions: Transaction[])=>{
      this.transactions = new MatTableDataSource(transactions);
      this.transactions.sort = this.sort;
    });
  }

}