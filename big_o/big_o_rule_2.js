function big_o_rule2(items){
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2); // getting the middle index which is the full length of arr / 2
  // we use floor() because float's are not represented as indexes within arrays... so we must round down

  var index = 0;
  while(index < middleIndex) { // until the loop reaches the middle-th index loop continues
          // print each el in array until loop reaches what should be mid-point of items arr. which is now represented as a num within middleIndex var
          console.log(items[index]); // index as i
          index++; // index as i - i will increase by 1 after every successful loop ... until reaches middleIndex
  }

// create a loop that iterates or turns atleast 100 times
for (var i = 0; i < 100; i++){
  // print ello for the duration of the loop
  console.log('ello');
 }
}


// what is the big o notation for this function, ignoring var assigningment's
// O(n/2 + 1) // is the notation of the above
//
// but as n grows in size... lets say we add 10000 els into the array which will then be divided.. well with such a big number
// dividing by 2 has less and less of a performance difference proccessing wise... we can drop the ' /2 '

// so it becomes :

  // O(n + 1)  // yet - even now the 1 which is a constant within this notation is insignifant in terms of how it will affect the performance ( neg or pos )

  // so we can even here simplify this discription as ...

  // O(n)  after we drop the constant of 1

  //  Below will show what O(2n) looks like - which is 1 function with 2 for loops
  // each for loop has the run time of O(n) so 2 loops would then be considered O(2n)

  function bigO2N(items){
    items.forEach(function(items){
      console.log(item);
    });
    items.forEaach(function(items){
      console.log(items);
    });

  }


// after we drop the above constants it would stll evaluate to O(N) instead of O(2n)
// we usually will not see numbers described in Big O - like constant ... though however we may see N squared ( n2 ) etc..

// example of O(n + m) || O(a + b)

function big_o_n_m(n,m){
  n.forEach(function(n){
    console.log(n);
  }); // O(n)  ...

  m.foreach(function(n){
    console.log(n);
  }); // O(m) ...
} // O(n + m)
