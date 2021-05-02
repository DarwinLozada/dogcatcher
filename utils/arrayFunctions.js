export const returnShuffledArray = (arr) => {
  // Use spread operator to not mutate the original array
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled
}

export const mergeArraysInsideArray = (arr) => {
  return [].concat(...arr)
}

export const sliceArrayBySteps = (arr, step) => {
  let index = 0
  const slicedArr = []
  while (index < arr.length) {
    slicedArr.push(arr.slice(index, (index += step)))
  }
  return slicedArr
}
