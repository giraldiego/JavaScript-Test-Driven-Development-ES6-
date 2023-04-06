export const getLetterCount = string => {
  const letters = string.split('');
  // let letterCount = {};

  const letterCount = letters.reduce( (acc, letter) => {
    acc[letter] = !acc[letter] ? 1 : (acc[letter] + 1);
    return acc;
  }, {});
  
  return letterCount;
};