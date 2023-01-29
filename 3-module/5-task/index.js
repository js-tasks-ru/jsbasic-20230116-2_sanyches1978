function getMinMax(str) {
  let obj = {};
  let arrNumbers = [];

  if( str == undefined ) return undefined;
  if( str.trim() === '' ) return obj;

  str.split(' ')
     .forEach( elem => {
      if( typeof(+elem) === 'number' && !isNaN(+elem) ) arrNumbers.push(elem)
      } );

  if( arrNumbers.length === 0 ) return obj;
  
  let min = Math.min( ...arrNumbers );
  let max = Math.max( ...arrNumbers );
  
  return {min, max};
}
