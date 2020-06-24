import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { total: 0, outcome: 0, income: 0 };
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    this.balance = { total: 0, outcome: 0, income: 0 };
    this.transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        this.balance.income += transaction.value;
      } else {
        this.balance.outcome += transaction.value;
      }
    });
    this.balance.total = this.balance.income - this.balance.outcome;
    return this.balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
