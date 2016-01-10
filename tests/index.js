
const tape = require('tape');
const tcase = require('tape-case');

const getCombs = require('../index.js');

tape('poker-combinations:', function(t) { t.end(); });

tape('check interface', function(t) {
  t.equal(typeof getCombs, 'function', 'getCombs is a function');
  t.end();
});


tcase([
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 5 ], result: 21 },
  { description: 'combinations', args: [ [1,1,2,2,3,4,10], 5 ], result: 21 },
  { description: 'combinations', args: [ [1,1,2,2,3,4,10] ], result: 21 },
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 0 ], result: 1 },
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 4 ], result: 35 },
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 6 ], result: 7 },
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 7 ], result: 1 },
  { description: 'combinations', args: [ [1,2,3,4,5,6,7], 8 ], result: 0 },
], function(cards, size) {

  var combs = getCombs(cards, size);

  console.log(combs)

  return combs.length;

});
