exports.search = function (lst, target) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === target) {
      return true;
    }
  }
  return false;
};

exports.binarySearch = function binarySearch(lst, target) {
  if (lst.length === 0) {
    return false;
  }
  const midIdx = Math.floor(lst.length / 2);
  const midElement = lst[midIdx];

  if (midElement === target) {
    return true;
  } else if (midElement < target) {
    return binarySearch(lst.slice(midIdx + 1), target);
  } else if (target < midElement) {
    return binarySearch(lst.slice(0, midIdx), target);
  }
};

// Is really Binary 'contains' or 'exists' since it does not return index
exports.iterativeBinarySearch = function iterativeBinarySearch(lst, target) {
  let leftBound = 0;
  let rightBound = lst.length - 1;

  while (leftBound <= rightBound) {
    const midIdx = Math.floor((leftBound + rightBound) / 2);
    // If the target is bigger than the middle element,
    // move the left bound to mid + 1
    if (lst[midIdx] < target) {
      leftBound = midIdx + 1;

      // If the target is smaller than the middle element,
      // move the right bound to the middle -1
    } else if (target < lst[midIdx]) {
      rightBound = midIdx - 1;

      // Else, we found the target, it is at midIdex
    } else {
      return true;
    }
  }

  return false;
};

// O(n^2)
exports.insertionSort = function (lst) {
  const sortedList = [];
  lst.forEach((elm) => {
    let i = 0;
    while (sortedList[i] < elm) {
      i++;
    }
    sortedList.splice(i, 0, elm);
  });
  return sortedList;
};

exports.selectionSort = function (lst) {
  let lowIdx = 0;

  const swap = (lst, a, b) => {
    const tmp = lst[a];
    lst[a] = lst[b];
    lst[b] = tmp;
  };

  // Go over entire array
  for (let y = 0; y < lst.length; y++) {
    // Find lowest element to end
    for (let x = y; x < lst.length; x++) {
      if (lst[x] < lst[lowIdx]) {
        lowIdx = x;
      }
    }

    // Put at beginning
    swap(lst, lowIdx, y);
  }

  return lst;
};

exports.quicksort = function quicksort(lst) {
  if (lst.length === 0) {
    return [];
  }
  const [pivot, ...rest] = lst;
  const smallerElements = rest.filter((x) => x < pivot);
  const largerElements = rest.filter((x) => pivot <= x);
  return [...quicksort(smallerElements), pivot, ...quicksort(largerElements)];
};

/*
  3
 / \
1   5
*/
