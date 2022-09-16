// const stocks = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA'];
// const prices = [[12.81, 11.09, 12.11, 10.93, 9.83, 8.14], [10.34, 10.56, 10.14, 12.17, 13.1, 11.22], [11.53, 10.67, 10.42, 11.88, 11.77, 10.21]];

// const getStocks = (stocks, prices, top) => {
//   // Format matched object with prices sum
//   const _formatMatchedObj = (stocks, prices) => {
//     const matched_obj = {};
//     stocks.forEach((stock, idx) => {
//       matched_obj[stock] = matched_obj[stock] || 0;
//       prices.forEach(priceArr => matched_obj[stock] = matched_obj[stock] += priceArr[idx]);
//     });
//     return matched_obj;
//   }

//   // Calculate max prices until top
//   const _calculateMaxes = (matched_obj, top) => {
//     const results = [];
//     const values = Object.values(matched_obj);
//     for (let i = 0;i < top;i++) {
//       const max = Math.max(...values);
//       const matched_obj_entries = Object.entries(matched_obj);
//       for (let a = 0;a < matched_obj_entries.length;a++) {
//         const [key, val] = matched_obj_entries[a];
//         if (val === max) {
//           results.push(key);
//           break;
//         }
//       }
//       values.splice(values.indexOf(max), 1);
//     }
//     return results;
//   }

//   return _calculateMaxes(_formatMatchedObj(stocks, prices), top);
// }

// console.time();
// console.log(getStocks(stocks, prices, 3));
// console.timeEnd();
