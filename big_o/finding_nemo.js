const nemo = ['nemo'];
const everyone = ['dory','bruce','marlin','harlyquin','nemo','gill','foo','bar','bloat','nigel','squirt'];
// what does .fill() m()/f() do?
const large = new Array(10000).fill('nemo');

function findNemo(array){
    // start at the first index,,
    // loop through array until you meet the end or max length / eoa ( end of array )
    for (let i = 0; i < array.length; i++){
        console.log('Searching the vast sea looking for nemo');
        //  during loop,,
        // if the current index is exactly equal to 'nemo'
        if (array[i] === 'nemo')  {
                // then,,
                console.log('Found em!');
                //  for Big O(x)'s sake break the loop once we find 'nemo'
                break;
        }
    }
}

// call for nemo
findNemo(everyone);

// notes :

  // Big O cares mostly about the worse case scenario :
  //
  //   e.g :
  //
  //     is the item we are looking for at the beginning of the array ( best-case )
  //     or
  //     is the item at the end of the array or list? ( worse case )
  //
  //       why is this worse case ?
  //
  //         because the algorithm will have to take more steps to get to the element it is looking for 
  //
  //
