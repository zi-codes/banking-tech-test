import Printer from "./printer";

export default class HistoryHandler {
  constructor(printer = new Printer()) {
    this.history = [];
    this.printer = printer;
  }

  logHistory(amount, date, debit, balance) {
    this.history.push({
      date: date,
      debit: debit,
      amount: amount.toFixed(2),
      balance: balance.toFixed(2)
    });
  }

  print() {
    return this.printer.print(this.history);
  }
}
