import { Component, OnInit } from '@angular/core';

interface IBalance {
  month: number;
  monthPayment: number;
  fee: number;
  balPlusFee: number;
  rBalance: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  interest = 17.49;
  startingBalance = 14757;
  payment = 600;
  total = 0;
  balances: IBalance[] = [];

  ngOnInit() {
    let bal = this.startingBalance;
    let month = 1;
    while (bal > 0) {
      const currentFee = bal * (this.interest / 100 / 12);
      const currentBalPlusFee = bal + currentFee;
      let newBal = currentBalPlusFee - this.payment;
      let monthPay = this.payment;

      if (newBal < 0) {
        monthPay = this.payment + newBal;
        newBal = 0;
      }

      this.balances.push({ month: month, monthPayment: monthPay, fee: currentFee, balPlusFee: bal + currentFee, rBalance: newBal});

      bal = newBal;

      this.total += monthPay;

      // Don't do more than 1000 transactions
      month++;
      if (month > 1000) {
        break;
      }
    }
  }
}
