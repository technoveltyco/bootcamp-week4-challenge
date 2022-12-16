# Financial Analysis Console App
JavaScript Fundamentals: Console Finances

## Table of contents

- [Financial Analysis Console App](#financial-analysis-console-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots](#screenshots)
      - [Financial Analysis Output](#financial-analysis-output)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

In this challenge, you'll be using the concepts you've learned to complete the required activity. This activity presents a real-world situation in which your newfound JavaScript skills will come in handy. You are tasked with creating code for analyzing the financial records of a company. You have been provided with a financial dataset in the `starter/index.js` file.

### The challenge

You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.

Your task is to write JavaScript code that analyzes the records to calculate each of the following:

* The total number of months included in the dataset.

* The net total amount of Profit/Losses over the entire period.

* The average of the **changes** in Profit/Losses over the entire period.
  * You will need to track what the total change in profits are from month to month and then find the average.
  * (`Total/Number of months`)

* The greatest increase in profits (date and amount) over the entire period.

* The greatest decrease in losses (date and amount) over the entire period.

When you open your code in the browser your resulting analysis should look similar to the following:

  ```text
  Financial Analysis
  ----------------------------
  Total Months: 25
  Total: $2561231
  Average  Change: $-2315.12
  Greatest Increase in Profits: Feb-2012 ($1926159)
  Greatest Decrease in Profits: Sep-2013 ($-2196167)
  ```

Your final code should print the analysis to the console.

### Screenshots

![Financial Analysis console output](./assets/images/Screenshot%202022-12-16%20100333.png)

![Financial Analysis alert output](assets/images/Screenshot%202022-12-16%20100525.png)

#### Financial Analysis Output

```text
    Financial Analysis
---------------------------------------------------------------
    Total Months: 86
    Total: $38,382,578.00
    Average Change: $7,803.48
    Greatest Increase in Profits: Feb-2012 ($1,170,593.00)
    Greatest Decrease in Profits: Sep-2013 (-$1,196,225.00)
---------------------------------------------------------------
```

### Links

- Solution URL: [https://github.com/technoveltyco/bootcamp-week4-challenge](https://github.com/technoveltyco/bootcamp-week4-challenge)
- Live Site URL: [https://technoveltyco.github.io/bootcamp-week4-challenge/](https://technoveltyco.github.io/bootcamp-week4-challenge/)

## My process

I used 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript

### What I learned

A good understanding on how to use string formatter to output numbers with thousands and decimals, and include their currencies following the internationalization standards.

```js
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const str = formatter.format(1500);
console.log(str)
```

### Continued development

* Improve the UX/UI creating a website to display the financial analysis.
* Create CRUD features to operate with the dataset.
* Create an API to decouple data from presentation.

### Useful resources

- [MDN Reference](https://developer.mozilla.org/en-US/) - main reference for depper understanding of the semantic HTML, advanced CSS properties, and advanced JavaScript.
- [W3C School HTML Tutorial](https://www.w3schools.com/html/default.asp) - alternative reference for semantic and accessible HTML code snippets.
- [W3C School CSS Tutorial](https://www.w3schools.com/css/default.asp) - It helped as a reference for css properties.
- [W3C School JavaScript Tutorial](https://www.w3schools.com/js/DEFAULT.asp) - A quick reference for Math functions and code snippets.
- [How to Format Numbers as a Currency String in JavaScript?](https://thewebdev.info/2021/02/13/how-to-format-numbers-as-a-currency-string-in-javascript/) Useful resource to understand about string formatters, and specifically to format numbers as currencies.
## Author
  Daniel Rodriguez
- GitHub - [Technoveltyco](https://github.com/technoveltyco)

## Acknowledgments

The teacher and TAs that help us with resources and support to my questions during the development of this challenge.
