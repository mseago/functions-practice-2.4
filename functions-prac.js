// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
}
console.log(max(9,2));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if (a > b && a > c) {
      return a;
    }
    if (a < b && b > c) {
      return b;
    }
    else {
      return c;
    }
}
console.log(maxOfThree(1,2,4));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) {
        return true;
      }
      else {
        return false;
      }
    }
}
console.log(isVowel('x'));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string
// "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var vowels = ['a', 'e', 'i', 'o', 'u', ' '];
    var rovar = '';
    for (var i = 0; i < phrase.length; i++) {
      var consonant = phrase.charAt(i);
      if (vowels.indexOf(consonant) !== -1) {
        rovar = (rovar + (consonant));
      }
      else {
        rovar = (rovar + (consonant + 'o' + consonant));
      }
    }
    return rovar;
}

console.log(rovarspraket('hated this one'));

// ---------------------
// Define a function sum() and a function multiply() that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
// should return 24.
// ---------------------

function sum(arr){
    "use strict";
    var arr=[2,3,4];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum;
}
console.log(sum());

function multiply(arr){
    "use strict";
    var arr = [1,2,3,4];
    var mult = 1;
    for (var i = 0; i < arr.length; i++) {
      mult = mult * arr[i];
    }
  return mult;
}
console.log(multiply());

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    return str.split("").reverse().join("");
}
console.log(reverse('daed si luap'));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var mostLetters = 0;
    for (var i = 0; i < words.length; i++) {
      if (mostLetters < words[i].length) {
        mostLetters = words[i].length;
      }
    }
    return mostLetters;
}
console.log(findLongestWord(['bigboi', 'phantogram']));


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var longWords = [];
    for (var idx = 0; idx < words.length; idx++) {
      if (words[idx].length > i) {
        longWords.push(words[idx]);
      }
    }
    return longWords;
}
console.log(filterLongWords(['yes', 'sorta', 'nope'], 4));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var obj = {};
    for (var i = 0; i < string.length; i++) {
      var eachChar = string.charAt(i);
      if (eachChar in obj) {
        obj[eachChar] += 1;
      } else {
        obj[eachChar] = 1;
      }
    }
    return obj;
}
console.log(charFreq('bwahahahaha'));
