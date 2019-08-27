import Account from './account';

it('starts with a balance of 0', () => {
  const account = new Account()
  expect(account.balance).toBe(0);
});

it('accepts deposits with a date', () => {
  const account = new Account()
  const date = new Date(2012,0,10)
  account.add(1000, date)
  expect(account.balance).toBe(1000)
})

it('records history of the above', () => {
  const account = new Account()
  const date = new Date(2012,0,10)
  account.add(1000, date)
  expect(account.balance).toBe(1000)
  expect(account.historyHandler.history).toContainEqual(
    { date: date,
      debit: false,
      amount: "1000.00",
      balance: "1000.00"
    }
  )
})

it('accepts withdrawals with a date', () => {
  const account = new Account()
  const date = new Date(2012,0,14)
  account.withdraw(500, date)
  expect(account.balance).toBe(-500)
})

it('records history of the above', () => {
  const account = new Account()
  const date = new Date(2012,0,14)
  account.withdraw(500, date)
  expect(account.balance).toBe(-500)
  expect(account.historyHandler.history).toContainEqual(
    { date: date,
      debit: true,
      amount: "500.00",
      balance: "-500.00"
    }
  )
})

it('can print your total history', ()=> {
  const account = new Account()
  account.add(1000, new Date(2012,0,10))
  account.add(2000, new Date(2012,0,13))
  account.withdraw(500, new Date(2012,0,14))
  expect(account.printHistory()).toBe (
    "date || credit || debit || balance\n14/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00"
  )
})
