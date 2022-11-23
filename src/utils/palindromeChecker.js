/* eslint-disable no-plusplus */
export default function palindromeChecker(input) {
  if(input === '') return 'The string is empty'

  const patt = /[a-z0-9]+$/;
  
  const lowerCase = input.toLowerCase();

  const linealArray = [];
  const invertedArray = [];

  for (let i = 0; i <= lowerCase.length; i++) {
    const aux = lowerCase[i];
    if (patt.test(aux)) {
      invertedArray.unshift(aux);
      linealArray.push(aux);
    }
  }

  const inverted = invertedArray.join('');
  const lineal = linealArray.join('');

  if (lineal === inverted) return true;
  return false;
}
