function sumSalary(salaries) {
  let sum = 0;
  
  for( let key in salaries) {
    let elem = salaries[key];

    if(
      /*typeof(elem) === 'number' 
      && !isNaN(elem)
      && elem !== Infinity
      && elem !== -Infinity*/
      typeof(elem) === 'number'
      && isFinite(elem)
      ) {
      sum += elem;
    }
  }
  return sum;   // ваш код...
}
