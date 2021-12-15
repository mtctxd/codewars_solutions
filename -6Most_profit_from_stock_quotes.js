// src = https://www.codewars.com/kata/597ef546ee48603f7a000057/train/javascript

function getMostProfitFromStockQuotes(quotes) {
    let result = 0;

    for (let i = 0; i < quotes.length; i++) {
        const price = quotes[i];
        let localProfit = 0;

        if (quotes[i] > quotes[i - 1] && (quotes[i + 1] < quotes[i] || i === quotes.length - 1)) {
            localProfit++

            console.log("match", price)
        }
        result += localProfit;
    }

    return result;
}

// console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6]), 15);
// console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1]), 0);
// console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7]), 18);
// console.log(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2]), 26);
