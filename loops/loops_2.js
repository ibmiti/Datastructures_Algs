// compare 2 arrays and in this comparison return true if there are any common characters
// return false if there are not any common characters

// first group
const x = ['x','y','z'];
const y = ['n','m','j'];

// second group -- control group : designed to fail or return true
const a = [1,2,3,4];
const b = [1,3,5,6];

//O(n^2)
function array_smasher(array_1, array_2){
  for (i = 0; i < array_1.length; i++){
    for (j = 0; j < array_2.length; j++) {
      if (array_1[i] === array_2[j]){
        return true;
      }
    }
  }
  return false;
}
