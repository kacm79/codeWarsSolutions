//needle in a haystack (8 kyu)

function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}


//The highest profit wins (7 kyu)

const minMax = (arr) => [(Math.min.apply(null, arr)), (Math.max.apply(null, arr))];


//Remove the minimum(7 kyu)

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  } else for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === Math.min(...numbers)) {
  const newList = numbers.slice(0, i).concat(numbers.slice(i+1, numbers.length));
    return newList
  }
 }
}

