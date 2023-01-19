function factorial(n) {
  let result = 1;

  if(n === 0) return result;

  if( n < 0 || Math.round(n) !== n /*!Number.isInteger(n)*/ ) {
    return `${n}!: Расчёт невозможен. Факториал вычисляется у целых положительных чисел`;
  }

  for( let i = n; i > 0; i-- ) {
    result *= i;
  }

  return result;  // ваш код...
}
