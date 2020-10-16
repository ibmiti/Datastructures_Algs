// Find 1st, Find nth
first_tweet = [];
last_tweet  = [];
// give each tweet an associated date property and val
const array = [
  {
    tweet: 'hi',
    date : 2017
  },
  {
    tweet: 'hello',
    date : 2019
  },
  {
    tweet: 'last tweet ever',
    date: 2020
  }
];

first_tweet = array[0]; // O(1)
last_tweet  = array[array.length - 1];
console.log(first_tweet,last_tweet)


// compare all 3 dates
// incomplete O(n^2) for now...
for (i = 0; i < array.length; i++) {
  for (j = 0; j < array.length; j++) {
    // if (array[i][j])
    console.log(array[i]);
  }
}
