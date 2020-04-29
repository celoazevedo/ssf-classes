export class bankAccount {
  owner: string;
  balance: number;
  transactions: number[] = [];

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
  //   * write a method called withdrawal to withdraw a given amount.
  withdrawal(withdrawal: number) {
    let balanceAfter = this.balance - withdrawal;
    this.balance = balanceAfter;
    this.transactions.push(withdrawal);
    return withdrawal;
  }
  //   * write a method called deposit to deposit a given amount.
  deposit(amount: number) {
    let balanceAfter = this.balance + amount;
    this.balance = balanceAfter;
    this.transactions.push(amount);
    return amount;
  }
}

// let Marcelo = new bankAccount('Marcelo', 199999);
// Marcelo.withdrawal();
