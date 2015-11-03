
'use strict';

exports = module.exports = function getCombinations(cards, size) {

  if (!size) {
    return [[]];
  }

  if (size > cards.length) {
    return [];
  }

  if (size == cards.length) {
    return [cards];
  }

  let combinations = [];

  return cards.reduce(function (combs, card, i) {
    let newCombination = getCombinations(cards.slice(i + 1), size - 1).map(comb => [card].concat(comb));
    return combs.concat(newCombination);
  }, combinations);

}
