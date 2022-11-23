/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
export default function romanNumConverter(num) {
  if (typeof num !== 'number') throw new Error('The argument is not a number');
  if (num > 3999) throw new Error('Sorry, only can convert numbers minors of 4000');

  let roman = '';

  const stringNums = num.toString().split('');
  const nums = stringNums.map((n) => Number.parseInt(n, 10));

  const itsFourOrNine = (n) => {
    if (n == 4 || n == 9) return true;
    return false;
  };

  const romanCharacter = [
    {
      unity: 'I',
      nine: 'IX',
      five: 'V',
      four: 'IV',
    },
    {
      unity: 'X',
      nine: 'XC',
      five: 'L',
      four: 'XL',
    },
    {
      unity: 'C',
      nine: 'CM',
      five: 'D',
      four: 'CD',
    },
    {
      unity: 'M',
    },
  ];

  let chars = nums.length - 1;
  for (let j = 0; j <= nums.length - 1; j++) {
    if (nums[j] < 5) {
      if (itsFourOrNine(nums[j])) roman += romanCharacter[chars].four;
      else {
        for (let i = 0; i < nums[j]; i++) {
          roman += romanCharacter[chars].unity;
        }
      }
    } else if (itsFourOrNine(nums[j])) roman += romanCharacter[chars].nine;
    else {
      let aux = romanCharacter[chars].five;
      for (let i = 5; i < nums[j]; i++) {
        if (nums[j] === 5) return;

        aux += romanCharacter[chars].unity;
      }
      roman += aux;
    }
    chars -= 1;
  }

  return roman;
}
