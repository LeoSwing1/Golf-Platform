export const calculatePrizeDistribution = (results, totalPool) => {
  let winners = {
    match5: [],
    match4: [],
    match3: []
  };

  results.forEach(r => {
    if (r.matches === 5) winners.match5.push(r.userId);
    else if (r.matches === 4) winners.match4.push(r.userId);
    else if (r.matches === 3) winners.match3.push(r.userId);
  });

  const prize = {
    match5: totalPool * 0.4,
    match4: totalPool * 0.35,
    match3: totalPool * 0.25
  };

  return { winners, prize };
};