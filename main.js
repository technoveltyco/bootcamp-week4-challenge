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
 * Gets the date from a given transaction of the dataset.
 * 
 * @param {Array} transaction 
 *      A transaction array from the dataset with month in format M-Y,
 *      and balance as signed Number.
 * @returns {String}
 *      Date in String formatting 'M-Y'.
 */
function getTransactionDate(transaction) {
    return transaction[0];
}

/**
 * Gets the balance from a given transaction of the dataset.
 * 
 * @param {Array} transaction 
 *      A transaction array from the dataset with date in format M-Y,
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
    console.log("Date: ", getTransactionDate(transaction), " Profit/Loss: ", getTransactionBalance(transaction));
}

/**
 * Gets total months from the dataset.
 * 
 * @returns {Array}
 *      An array of different dates with format 'M-Y'.
 */
function getTotalMonths() {
    let months = [];

    for (let index = 0; index < dataset.length; index++) {
        const transaction = getTransaction(index);
        const date = getTransactionDate(transaction);

        if (!months.includes(date)) {
            months.push(date);
        } 
    }

    return months.length;
}

/**
 * Gets the net total net amount of Profit/Losses over the entire period in the dataset.
 * 
 * @returns {Number}
 *      A signed Number representing the total net balance from the dataset.
 */
function getTotalAmount() {
    let totalAmount = .0;

    for (let index = 0; index < dataset.length; index++) {
        const transaction = getTransaction(index);
        const balance = getTransactionBalance(transaction);

        totalAmount += balance;
    }

    return totalAmount;
}

/**
 * Main entry point.
 */
function main() {
    const totalMonths = getTotalMonths();
    const total = getTotalAmount();

    const output = `
    Financial Analysis
------------------------------------------------------------------------
    Total Months: ${totalMonths}
    Total: ${total}
------------------------------------------------------------------------
    `;

    console.log(output);
}

///
// Executes main entry point. 
///

main();
