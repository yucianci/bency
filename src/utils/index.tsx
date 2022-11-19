export const formatedPokedexNumber = (number: number) => {
  const str = `${number}`;
  const pad = '0000';

  return pad.substring(0, pad.length - str.length) + str;
};
