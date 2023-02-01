function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.insertAdjacentHTML('beforeend', '<ul></ul>');
 
  for( let friend of friends ) {
    let li = document.createElement('li');
    ul.insertAdjacentHTML('beforeend', `<li>${friend['firstName']} ${friend['lastName']}</li>`);
  }
  return ul;
}
