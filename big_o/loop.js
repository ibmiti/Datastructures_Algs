function loops(n){
  for (let i = 0; i < n.length; i++){
    console.log('looopss')
  }
}

loops([1,2,3,4,5]);

function arrayOfN(n){
  let array_foo = [];
  // this loop will rotate or iterate up to n times
  for (let i = 0; i < n.length; i++){
    array_foo[i] = 'bar';
  }
  return array_foo;
}

arrayOfN(6); // O(n)
