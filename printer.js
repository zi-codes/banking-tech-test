export default class Printer {
  print(history) {
    return this.printHeaders() + this.printEntries(history);
  }

  printHeaders() {
    return "date || credit || debit || balance\n";
  }

  printEntries(history) {
    return history
      .reverse()
      .map(entry => this.printEntry(entry))
      .join("\n");
  }

  printEntry(entry) {
    return `${this.parseDate(entry.date)} || ${this.calculateCredit(
      entry
    )} || ${this.calculateDebit(entry)} || ${entry.balance}`;
  }

  parseDate(date) {
    let moment = require("moment");
    return moment(date).format("DD/MM/YYYY");
  }

  calculateDebit(entry) {
    return entry.debit ? `${entry.amount}` : "";
  }

  calculateCredit(entry) {
    return entry.debit ? "" : `${entry.amount}`;
  }
}
