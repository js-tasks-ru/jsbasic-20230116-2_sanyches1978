function isEmpty(obj) {
  /*for( let key in obj ) {
    return false;
  } 
  return true;*/
  
  if( Object.keys(obj).length || Object.getOwnPropertySymbols(obj).length ) {
    return false;
  } else {
    return true;
  }   // ваш код...
}
