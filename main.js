///
// Dataset initialization.
///
const dataset = (typeof finances !== 'undefined') ? finances : [];

///
// Functions declarations. 
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
 * Gets all rate of changes between two consecutive periods over the dataset.
 * 
 * @returns {Array}
 *      All the rates of change over all the periods of the dataset. 
 */
function getRateOfChanges() {
    let rateOfChanges = [];

    for (let index = 1; index < dataset.length; index++) {
        const [presentDate, presentAmount] = getTransaction(index);
        const [previousDate, previoustAmount] = getTransaction(index - 1);
        
        const rateOfChangeAmount = presentAmount - previoustAmount;

        rateOfChanges.push(rateOfChangeAmount);
    }

    return rateOfChanges;
}

/**
 * Gets the average change in Profit/Losses over the entire period of the dataset.
 * 
 * @returns {Number}
 *      A signed number representing the average rate of change amount.
 */
function getAverageChange() {

    const rateOfChanges = getRateOfChanges();

    const totalRoCAmount = rateOfChanges.reduce(function(total, rocAmount) {
        return total + rocAmount;
    }, .0);

    const totalMonths = getTotalMonths() - 1; // Removes the first month that does not have a previous period.

    const averageChange = totalRoCAmount / totalMonths;

    return averageChange;
}

/**
 * Gets the greatest increase in profits (date and amount) over the entire period.
 * 
 * @returns {Array}
 *      The transaction (date and amount) with the greatest amount.
 */
function getGreatestIncrease() {
    const rateOfChanges = getRateOfChanges();
    const maxRoCAmount = Math.max(...rateOfChanges);

    const index = rateOfChanges.indexOf(maxRoCAmount) + 1; // Add 1 to get the present transaction of the period.
    const [presentDatePeriod, presentBalancePeriod] = getTransaction(index);
    
    return [presentDatePeriod, maxRoCAmount];
}

/**
 * Gets the greatest decrease in losses (date and amount) over the entire period.
 * 
 * @returns {Array}
 *      The transaction (date and amount) with the smallest amount.
 */
function getGreatestDecrease() {
    const amounts = dataset.map(function (transaction) {
       return transaction[1]; 
    });
    const minAmount = Math.min(...amounts);
    const transaction = dataset.find(function(transaction) {
        return transaction[1] === minAmount;
    });
    
    return transaction;
}

/**
 * Main entry point.
 * 
 * @returns {String}
 *      The Financial Analysis output.
 */
function financialAnalysis() {
    const totalMonths = getTotalMonths();
    const total = getTotalAmount();
    const averageChange = getAverageChange();
    const [giDate, giAmount] = getGreatestIncrease();
    const [gdDate, gdAmount] = getGreatestDecrease();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const output = `
    Financial Analysis
------------------------------------------------------------------------
    Total Months: ${totalMonths}
    Total: ${formatter.format(total)}
    Average Change: ${formatter.format(averageChange)}
    Greatest Increase in Profits: ${giDate} (${formatter.format(giAmount)})
    Greatest Decrease in Profits: ${gdDate} (${formatter.format(gdAmount)})
------------------------------------------------------------------------
    `;

    return output;
}

///
// Executes main entry point. 
///

// Gets financial analysis output.
const output = financialAnalysis();

// Logs output to the console.
console.log(output);
