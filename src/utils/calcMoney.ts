import consts from "../consts";

export const calcTotalExpense = () => {
    const expenseTransactions = consts.transactions.filter((transaction) => transaction.typeId === 1);
    const totalExpense = expenseTransactions.reduce((prev, expenseTransaction) => prev + expenseTransaction.amount, 0);
    return totalExpense;
}

export const calcTotalIncome = () => {
    const incomeTransactions = consts.transactions.filter((transaction) => transaction.typeId === 2);
    const totalIncome = incomeTransactions.reduce((prev, incomeTransaction) => prev + incomeTransaction.amount, 0);
    return totalIncome;
}