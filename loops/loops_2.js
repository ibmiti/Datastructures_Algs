// compare 2 arrays and in this comparison return true if there are any common characters
// return false if there are not any common characters

// first group
const array1 = ['x','y','z'];
const array2 = ['n','m','j'];

// second group -- control group : designed to fail or return true
const array3 = [1,2,3,4];
const array4 = [1,3,5,6];

//O(n^2)
function array_smasher(array_1, array_2){
  for (index1 = 0; index1 < array_1.length; index1++){
    for (index2 = 0; index2 < array_2.length; index2++) {
      if (array_1[index1] === array_2[index2]){
        return true;
      }
    }
  }
  return false;
}
