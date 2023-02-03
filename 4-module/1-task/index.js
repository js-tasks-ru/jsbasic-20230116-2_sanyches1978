function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  
  for( let friend of friends ) {
    let li = document.createElement('li');
    ul.insertAdjacentHTML('beforeend', `<li>${friend['firstName']} ${friend['lastName']}</li>`);
  }
  return ul;
}
