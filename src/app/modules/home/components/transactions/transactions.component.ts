import {Component, OnInit} from '@angular/core';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(transactionService: TransactionService) {
  }

  ngOnInit() {
  }


}
