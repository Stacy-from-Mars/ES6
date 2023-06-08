function checkScope(data) {
    let i = 'function scope';
    if (data) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }