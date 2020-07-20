"use strict";

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {

        const transaction = {
            // id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
            id: this.transactions.length + 1,
            amount: amount,
            type: type,
        };
        return transaction;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            return console.log(`Cнятие такой суммы не возможно, недостаточно средств`);
        }
        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return `На вашем счету ${this.balance}`;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return console.log(transaction);
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalAmount = 0;

        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                console.log(transaction);
                totalAmount += transaction.amount;
            }
        }
        return console.log(totalAmount);
    },
};


account.deposit(10000);
account.deposit(5000);
account.withdraw(5000);
account.withdraw(5000);
// account.withdraw(10000);
account.getTransactionDetails(4);
account.getTransactionTotal("deposit");
console.log(account.balance);
console.log(account.transactions);
console.table(account);


