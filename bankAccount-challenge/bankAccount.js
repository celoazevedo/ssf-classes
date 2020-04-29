"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        this.transactions = [];
        this.owner = owner;
        this.balance = balance;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    //   * write a method called withdrawal to withdraw a given amount.
    bankAccount.prototype.withdrawal = function (withdrawal) {
        var balanceAfter = this.balance - withdrawal;
        this.balance = balanceAfter;
        this.transactions.push(withdrawal);
        return withdrawal;
    };
    //   * write a method called deposit to deposit a given amount.
    bankAccount.prototype.deposit = function (amount) {
        var balanceAfter = this.balance + amount;
        this.balance = balanceAfter;
        this.transactions.push(amount);
        return amount;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
// let Marcelo = new bankAccount('Marcelo', 199999);
// Marcelo.withdrawal();
