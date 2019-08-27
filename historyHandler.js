export default class HistoryHandler {
  constructor() {
    this.history = []
  }

  logHistory(amount,date,debit,balance) {
    this.history.push({
      date: date,
      debit: debit,
      amount: amount.toFixed(2),
      balance: balance.toFixed(2)
    })

  }

  print() {
    return this.printHeaders() + this.printEntries()
  }

  printHeaders() {
    return("date || credit || debit || balance\n")
  }

  printEntries () {
    return this.history.reverse().map( entry =>
      this.printEntry(entry)
    ).join("\n")
  }

  printEntry (entry) {
    return `${this.parseDate(entry.date)} || ${this.calculateCredit(entry)} || ${this.calculateDebit(entry)} || ${entry.balance}`
  }

  parseDate (date) {
    let moment = require('moment')
    return moment(date).format("DD/MM/YYYY")
  }

  calculateDebit (entry) {
    if (entry.debit === true) {
      return `${entry.amount}`
    } else {
      return ""
    }
  }

  calculateCredit (entry) {
    if (entry.debit === false) {
      return `${entry.amount}`
    } else {
      return ""
    }
  }
}
