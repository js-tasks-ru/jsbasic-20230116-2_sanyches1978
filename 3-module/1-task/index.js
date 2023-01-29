function namify(users) {
  let arrNames = [];

  /*for( let user of users ) {
    arrNames.push( user.name );
  }*/

  users.forEach( user => arrNames.push(user.name) );

  return arrNames;   // ваш код...
}
