/* eslint-env jest */

"use strict";

const getCombinations = require("../index");

const json = (o) => JSON.stringify(o);

it("getCombinations size default is 5", () => {
  const combs = getCombinations([1, 2, 3, 4, 5, 6, 7]);

  expect(json(combs)).toMatchSnapshot();
});

it("getCombinations with explicit size of 5", () => {
  const combs = getCombinations([1, 2, 3, 4, 5, 6, 7], 5);

  expect(json(combs)).toMatchSnapshot();
});
