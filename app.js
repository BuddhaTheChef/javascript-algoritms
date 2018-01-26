////////////////////////////////////////////////////////////////////////////////
//                                FIzz Buzz


// function fizzBuzz(num){
//
// for (var i = 1; i <= num; i++) {
//
// if(i % 3 === 0 && i % 5 === 0) {
// console.log("fizzBuzz");
// }
// else if (i % 3 === 0) {
// console.log("Fizz")
// }
//
// else if( i % 5 === 0) {
// console.log("Buzz")
// }
// else {
// console.log(i)
// }
// }
// }
//
// fizzBuzz(20);

////////////////////////////////////////////////////////////////////////////////
//                              Big O notation

//
// //Big O Notation: "0 (1)"
// //Constant runtime
// function log(array) {
//   console.log(array[0]);
//   console.log(array[1]);
// }
//
// //Linear runtime
// //Big O Notation "O (n)"
// function logAll(array){
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }
//
// //exponetial runtime
// //Big O notation "O(n^2)"
// function addAndLog(array) {
//   for(var i = 0; i <array.length; i++){
//     for(var j = 0; j <array.length; j++){
//       console.log(array[i] + array[j]);
//     }
//   }
// }
//
// //logarithmic runtime
// //Big O Notation: O (log n)
//
// function binarySearch(array, key) {
//   var low = 0;
//   var high = array.length -1;
//   var mid;
//   var element;
//
//   while(low <= high) {
//     mid = Math.floor((low + high) / 2, 10);
//     element = array[mid];
//     if(element > key) {
//       high = mid -1;
//     }
//     else if (element > key) {
//       high = mid -1;
//     }
//     else {
//       return mid;
//     }
//   }
//   return -1;
// }
//
// addAndLog(['A','B','C']); //9 pairs logged out
// addAndLog(['A','B','C', 'D']); //16 pairs logged out
// addAndLog(['A','B','C', 'D', 'E']); // 25 pairs logged out
//
//
// logAll([1,2,3,4,5]);
// logAll([1,2,3,4,5,6,7]);
// logAll([1,2,3,4,5,6,7,8,9,10]);
//
// log([1,2,3,4]);
// log([1,2,3,4,5,6,7,8,9,10]);
//
//
// ////////////////////////////////////////////////////////////////////////////////
//
// //Linear time complexity O(n + m)
// //given note text and magazine text can you create a phrase from magazine text return true or false
//
// function harmlessRansomNote(noteText, magazineText) {
//   var noteArr = noteText.split(' ');
//   var magazineArr = magazineText.split(' ');
//   var magazineObj = {};
//
//   magazineArr.forEach(function(word) {
//     if(!magazineObj[word]) magazineObj[word] = 0;
//     magazineObj[word]++;
//   });
//
//   var noteIsPossible = true;
//   noteArr.forEach(word => {
//     if(magazineObj[word]){
//       magazineObj[word]--;
//       if(magazineObj[word] < 0) noteIsPossible = false;
//     }
//     else noteIsPossible = false;
//   })
//   return noteIsPossible;
//  console.log(magazineObj);
// }
//
// harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder
//  and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find
//  the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early
//  in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have
//  ever visited');
//
//  ////////////////////////////////////////////////////////////////////////////////
// //                                  Palindrome
//
//
// function isPalindrome(string){
//   string = string.toLowerCase();
//   var charArr = string.split('');
//   var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
//
//   var lettersArr = [];
//   charArr.forEach(char => {
//     if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
//   });
//   if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
//   else return false;
//
// }
//
// isPalindrome("Madam I'm Adam");
// isPalindrome("Racecar");

////////////////////////////////////////////////////////////////////////////////
//                                 Ceaser Cipher

// function caesarCipher(str,num) {
//   num = num % 26;
//   var lowerCaseString = str.toLowerCase();
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   var newString = '';
//
//   for (var i = 0; i < lowerCaseString.length; i++) {
//     var currentLetter = lowerCaseString[i];
//     if (currentLetter === ' ') {
//       newString += currentLetter;
//       continue;
//     }
//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = 26 + newIndex;
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     }
//     else newString += alphabet[newIndex];
//   }
//
//   return newString;
// }
// caesarCipher('Poo Keeper', 2);
// caesarCipher('Big Car', -16);
// caesarCipher('Javascript', -900);
//
// ////////////////////////////////////////////////////////////////////////////////
// //                               Reverse Words
//
// function reverseWords(string) {
//   var newString = string.toLowerCase().split(' ')
//   var reversedWordsArray = [];
//
//   newString.forEach(word => {
//     var reversedWord = '';
//     for(var i = word.length - 1; i>=0; i--){
//       reversedWord += word[i];
//     }
//     reversedWordsArray.push(reversedWord);
//   })
//   return reversedWordsArray.join(' ');
// }
//
// reverseWords('Hi My name is Aj');
// reverseWords('Coding Javascript');
//
// ////////////////////////////////////////////////////////////////////////////////
// //                          Reverse Array In Place
//
// function reverseArrayInPlace(arr) {
//   for (var i = 0; i < arr.length /2; i++){
//     var tempVar = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = tempVar;
//   }
//   return arr;
// }
//
// reverseArrayInPlace([0,1,2,3,4,5,6,7,7,8,9,10]);
// reverseArrayInPlace([20,18,16,14,12,10,8,6,4,2]);


////////////////////////////////////////////////////////////////////////////////
//                              Mean Median Mode

function getMean(array){
  var sum = 0;
  array.forEach(num => {
    sum += num;
  })
  var mean = sum / array.length;
  return mean;
}



function getMedian(array){
  array.sort(function(a,b) { return a - b });
  var median;
  if(array.length % 2 !== 0){
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1]
    var mid2 = array[array.length / 2]
    median = (mid1 + mid2) / 2;

  }
  return median;
}



function getMode(array){
  var modeObj = {};

  array.forEach(num => {
    if(!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if(modeObj[num] > maxFrequency){
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
 if (modes.length === Object.keys(modeObj).length) modes = [];
 return modes;
}



function meanMedianMode(array){
  return {
    mean : getMean(array),
    mode: getMode(array),
    median: getMedian(array)
  };
}

meanMedianMode([1,2,3,4,5,4,6,1,1])



////////////////////////////////////////////////////////////////////////////////
