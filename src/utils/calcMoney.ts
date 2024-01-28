import consts from "../consts";

export const calcTotalExpense = (transactions: any) => {
    const expenseTransactions = transactions.filter((transaction: any) => transaction.typeId === "65b45e8ac06aa8dfa60a525b");
    const totalExpense = expenseTransactions.reduce((prev: number, expenseTransaction: any) => prev + expenseTransaction.amount, 0);
    return totalExpense;
}

export const calcTotalIncome = (transactions: any) => {
    const incomeTransactions = transactions.filter((transaction: any) => transaction.typeId === "65b45eb1c06aa8dfa60a525c");
    const totalIncome = incomeTransactions.reduce((prev: number, incomeTransaction: any) => prev + incomeTransaction.amount, 0);
    return totalIncome;
}