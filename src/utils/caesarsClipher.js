export default function caesarsClipher(str) {
  if (typeof str !== 'string') throw new Error('The argument is not a string');
  const patt = /[A-Z]+$/;

  const string = str.toUpperCase();
  let decode = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    const initialCharCode = string.charCodeAt(i);
    if (patt.test(string[i])) {
      if (initialCharCode + 13 > 90) {
        const aux = initialCharCode + 13 - 90 + 64;
        decode += String.fromCharCode(aux);
      } else {
        const aux = initialCharCode + 13;
        decode += String.fromCharCode(aux);
      }
    } else decode += string[i];
  }

  return decode;
}
