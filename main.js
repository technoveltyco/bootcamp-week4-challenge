///
// Dataset declaration.
///
const dataset = (typeof finances !== 'undefined') ? finances : [];

///
// Function declarations. 
///

/**
 * Gets a transaction from the dataset.
 * 
 * @param {int} index
 *      Index of the transaction.
 * @returns {Array} 
 *      A transaction array from the dataset with month in format M-Y,
 *      and balance as signed integer.
 */
function getTransaction(index) {
    return dataset[index]
}

/**
 * Gets all months from the dataset.
 * 
 * @returns {Array}
 *      An array of different months with format 'M-Y'.
 */
function getAllMonths() {
    let months = [];

    for (let index = 0; index < dataset.length; index++) {
        const transaction = getTransaction(index);
        const month = getTransactionMonth(transaction);

        if (!months.includes(month)) {
            months.push(month);
        } 
    }

    return months;
}

/**
 * Gets the net total amount of Profit/Losses over the entire period in the dataset.
 * 
 * @returns {Number}
 *      A signed Number representing the total net balance from the dataset.
 */
function getTotalBalance() {
    let totalBalance = .0;

    for (let index = 0; index < dataset.length; index++) {
        const transaction = getTransaction(index);
        const balance = getTransactionBalance(transaction);

        totalBalance += balance;
    }

    return totalBalance;
}

/**
 * Gets the month from a given transaction of the dataset.
 * 
 * @param {Array} transaction 
 *      A transaction array from the dataset with month in format M-Y,
 *      and balance as signed Number.
 * @returns {String}
 *      Month in String formatting 'M-Y'.
 */
function getTransactionMonth(transaction) {
    return transaction[0];
}

/**
 * Gets the balance from a given transaction of the dataset.
 * @param {Array} transaction 
 *      A transaction array from the dataset with month in format M-Y,
 *      and balance as signed Number.
 * @returns {Number}
 *      A signed Number representing the balance of the transaction.
 */
function getTransactionBalance(transaction) {
    return transaction[1];
}

/**
 * Prints a transaction.
 * 
 * @param {Array} transaction 
 *      A transaction array from the dataset with month in format M-Y,
 *      and balance as signed Number.
 */
function printTransaction(transaction) {
    console.log("Month: ", getTransactionMonth(transaction), " Balance: ", getTransactionBalance(transaction));
}

/**
 * Main entry point.
 */
function main() {
    const months = getAllMonths();
    const netAmount = getTotalBalance();

    console.log(
        dataset.length, 
        months.length, 
        netAmount
    );

    for (let index = 0; index < dataset.length; index++) {
        const transaction = getTransaction(index);
        printTransaction(transaction);
    }
}

///
// Executes main entry point. 
///

main();
