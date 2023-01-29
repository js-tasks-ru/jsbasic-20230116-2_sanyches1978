function camelize(str) {
  let arrWords = [];
  let arrModified = [];

  arrWords = str.split('-');

  for( let i = 0; i < arrWords.length; i++ ) {
    let word = arrWords[i];

    if( i === 0 ) {
      arrModified.push(word);
      continue;
    }
    arrModified.push( word[0].toUpperCase() + word.slice(1) );
    
  }
  let camelStr = arrModified.join('');
  
  //console.log(camelStr);
  return camelStr;   // ваш код...
}
