const test = require('ava');
const {
  search,
  binarySearch,
  insertionSort,
  iterativeBinarySearch,
  quicksort,
  selectionSort,
} = require('./search');

test('searching', (t) => {
  t.true(search([5, 1, 2, 3, 4], 2));
  t.false(binarySearch([5, 5, 5, 1, 2], 2));
  t.true(binarySearch([1, 2, 3, 4, 5], 2));
  t.false(binarySearch([1, 2, 3, 4], 1000));
  //   t.is(iterativeBinarySearch([1, 2, 3, 4, 5], 2), 1);
  t.true(iterativeBinarySearch([1, 2, 3, 4, 5], 2));
  t.false(iterativeBinarySearch([1, 2], 3));
});

test('sorting', (t) => {
  const arr = [5, 17, 9, 4, 18, -1];
  t.deepEqual(insertionSort(arr), [-1, 4, 5, 9, 17, 18]);
  t.deepEqual(quicksort(arr), [-1, 4, 5, 9, 17, 18]);
  t.deepEqual(selectionSort(arr), [-1, 4, 5, 9, 17, 18]);
});
