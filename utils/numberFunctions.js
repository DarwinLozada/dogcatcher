export const getRandomNumberWithMax = (max) => {
  console.log(max)
  return Math.floor(Math.random() * (max + 1) + max + 1)
}
