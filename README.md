# poker-combinations

When you're playing Texas Hold'em Poker, you only have two cards in your hands.

In case you've managed to stay active in the game until the showdown, you've now five more cards on the table to form your best combination.

Supposing the order doesn't matter (and in fact it doesn't matter at all)... how many combinations of groups of five cards can you form from a bigger group of seven cards (your personal two cards, and the other five on the table)?

It turns out that there is a whole branch of math [[1]](https://en.wikipedia.org/wiki/Combination) that strives to answer this kind of questions... the answer is 42... mmm well not exactly, but almost, it's **21**.

If you, like me, are interested to know exactly what these 21 combinations are, you can use this **poker-combinations** module i've made.

It's a pretty simple, and small javascript module, without dependencies; it exports just a function you can use to get those combinations you're interested in.

```
const getCombinations = require('poker-combinations');
const comb = getCombinations([1,2,3,4,5,6,7]);
  // it's the same than const comb = getCombinations([1,2,3,4,5,6,7], 5);

comb.length // = 42/2
```

## npm

Hey npm folks, you can install this module via npm:

```
npm i poker-combinations --save
```

... but probably you already knew.
