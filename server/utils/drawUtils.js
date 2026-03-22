export const generateDrawNumbers = () => {
  const numbers = new Set();

  while (numbers.size < 5) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  return [...numbers];
};

export const calculateMatches = (userScores, drawNumbers) => {
  let matches = 0;

  userScores.forEach(score => {
    if (drawNumbers.includes(score)) {
      matches++;
    }
  });

  return matches;
};