function showSalary(users, age) {
  let str = '';
  for( let i = 0; i < users.length; i++ ) {
    let user = users[i];

    if( user.age <= age ) {
      str += `${user.name}, ${user.balance}`;
      if( i !== users.length - 1 ) str += '\n';
    }
  }
  return str.trim();   // ваш код...
}
