# @botpoker/all-combs

When you're playing Texas Hold'em Poker, you only have two cards in your hands.

In case you've managed to stay active in the game until the showdown, you've now five more cards on the table to form your best combination. So, a total of seven cards from which extracting the strongest 5-cards combination.

Supposing the order doesn't matter (and in fact it doesn't matter at all)... how many combinations of groups of five cards can you form from a bigger group of seven cards (your personal two cards, and the other five on the table)?

It turns out that there is a whole branch of math [[1]](https://en.wikipedia.org/wiki/Combination) that strives to answer this kind of questions... the answer is 42... mmm well not exactly, but almost, it's **21**.

If you, like me, are interested to know exactly what these 21 combinations are, you can use this **@botpoker/all-combs** module I've made.

It's a pretty simple, and small JavaScript module, without dependencies; it exports just a function you can use to get those combinations you're interested in.

```js
const getCombinations = require("@botpoker/all-combs");
const comb = getCombinations([1, 2, 3, 4, 5, 6, 7]);
  // it's the same that const comb = getCombinations([1,2,3,4,5,6,7], 5);

comb.length // = 42/2
```

## NPM

Hey npm folks, you can install [@botpoker/all-combs](https://www.npmjs.com/package/@botpoker/all-combs) via npm:

```
npm i @botpoker/all-combs
```

... but probably you already knew.
