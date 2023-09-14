// defining a function to convert prices of items in object list from USD to INR
function dollarToINRForItems(itemsAndPricesUSD, exchangeRate) {
  let newitemsAndPrices = Object.keys(itemsAndPricesUSD).map((item) => {
    const priceUSD = itemsAndPricesUSD[item];
    const priceINR = priceUSD * exchangeRate;
    return { item, priceINR };
  });

  const itemsAndPricesINR = {};

  newitemsAndPrices.forEach((itemPrice) => {
    // adding key value pairs i.e item: priceINR to new object
    itemsAndPricesINR[itemPrice.item] = itemPrice.priceINR;
  });

  return itemsAndPricesINR;
}

// ===============================================================================================

// this is an object list of items and their prices in USD
const itemsAndPricesUSD = {
  item1: 10.99,
  item2: 24.95,
  item3: 5.49,
  item4: 14.99,
  item5: 8.75,
};

//this is the exchange rate for USD to INR
const exchangeRate = 80;

console.log(dollarToINRForItems(itemsAndPricesUSD,exchangeRate));
