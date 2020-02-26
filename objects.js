"use strict";


// 1. countWords
function countWords(phrase) {
  let word_counts = {};

  for(const word of phrase.split(' ')){
    if(word in word_counts){
      word_counts[word] += 1;
    }
    else{
      word_counts[word] = 1;
    }
  }

  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  if(price in melon_prices){
    return melon_prices[price].sort();
  }
  else {
    return;
  }
}



const test = 'hello bye hello bye morning';
console.log(countWords(test));

getMelonsAtPrice(3.25);