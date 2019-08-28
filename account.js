import HistoryHandler from "./historyHandler";

export default class Account {
  constructor(historyHandler = new HistoryHandler()) {
    this.balance = 0;
    this.historyHandler = historyHandler;
  }

  add(amount, date = Date(Date.now())) {
    this.balance += amount;
    this.historyHandler.logHistory(amount, date, false, this.balance);
  }

  withdraw(amount, date = Date(Date.now())) {
    this.balance -= amount;
    this.historyHandler.logHistory(amount, date, true, this.balance);
  }

  printHistory() {
    return this.historyHandler.print();
  }
}
