import { chunk as _chunk } from "lodash";

const arr = [1];
const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = ["q", "f", "e", "r", "w"];

_chunk([], 1); //?
_chunk(arr, 2); //?
_chunk(arr1, 2); //?
_chunk(arr1, 1); //?
_chunk(arr2, 3); //?
_chunk(arr3, 2); //?
_chunk(arr3, 0); //?

// My chunk function
const chunk = (array: any[], size: number): any[][] => {
  if (size <= 0) return [];
  let res: any[][] = [];

  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }

  return res;
};

chunk([], 1); //?
chunk(arr, 2); //?
chunk(arr1, 2); //?
chunk(arr1, 1); //?
chunk(arr2, 3); //?
chunk(arr3, 2); //?
chunk(arr3, 0); //?
