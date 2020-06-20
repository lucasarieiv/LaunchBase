const user = {
  name: "Lucas",
  transactions: [],
  balance: 0
}

function createTransaction(transaction) {
  user.transactions.push(transaction)
  checkTransactionType(transaction)
}

function checkTransactionType(transaction) {
  if (transaction.type == 'credit') {
    balanceCredit(transaction)
  } else {
    balanceDebit(transaction)
  }
}

function balanceCredit(transaction) {
  user.balance += transaction.value
}

function balanceDebit(transaction) {
  user.balance -= transaction.value
}

function getHigherTransactionByType(typeTransaction) {
  let higherTransaction = 0

  for (let transaction of user.transactions) {
    if (transaction.type == typeTransaction) {
      if (higherTransaction < transaction.value) {
        higherTransaction = transaction.value
      }
    }
  }
  
  console.log(`The highest ${typeTransaction}-type transactions was ${higherTransaction}`)
}

function getAverageTransactionValue() {
  let sum = 0

  for (let transaction of user.transactions) {
    sum += transaction.value
  }

  console.log((sum / user.transactions.length).toFixed(2))
}

function getTransactionsCount() {
  let numberCreditTransaction = 0
  let numberDebitTransaction = 0

  for (let transaction of user.transactions) {
    if (transaction.type == 'credit') {
      numberCreditTransaction++
    } else {
      numberDebitTransaction++
    }
  }

  return {
    'credit': numberCreditTransaction,
    'debit': numberDebitTransaction
  }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

console.log(getTransactionsCount());