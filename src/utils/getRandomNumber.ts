const numbers: number[] = [];
export const getRandomNumber: Function = (min: number, max: number) => {
  const number = Math.floor(min + Math.random() * (max - min));
  if (numbers.includes(number)) return getRandomNumber(min, max);
  else {
    numbers.push(number);
    return number;
  }
};
