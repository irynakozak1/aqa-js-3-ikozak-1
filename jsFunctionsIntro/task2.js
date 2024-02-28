const checkAdult = (age) => {
  const isAdult = age >= 18;
  console.log('Person is adult:', isAdult);
  return isAdult;
};

checkAdult(25);
checkAdult(15);
