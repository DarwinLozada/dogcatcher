export const returnShuffledArray = (arr) => {
  // Use spread operator to not mutate the original array
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled
}
