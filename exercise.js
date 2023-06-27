console.log("code wars");

function booleanToString(b) {
    //let newElement;
    if (b) {
        return "true";
    } else {
        return "false";
    }
    //return newElement;
}

console.log(booleanToString(true) === "true");
console.log(booleanToString(false) === "false");

function basicOp(operation, value1, value2) {

    if (operation === "+") {
        return value1 + value2;
    }
    if (operation === "-") {
        return value1 - value2;
    }
    if (operation === "*") {
        return value1 * value2;
    } 
        
    return value1 / value2;
    

}

console.log(basicOp("+", 4, 7) === 11);
console.log(basicOp("-", 15, 18) === -3);
console.log(basicOp("*", 5, 5) === 25);
console.log(basicOp("/", 49, 7) === 7);

// 1)Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i].toLowerCase()) == -1) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(removeVowels('This website is for losers LOL!'));

// 2)Have to return the highest and lowest number of string
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    const num = numbers.split(" ");
    let maxNum = Number(num[0]);
    let minNum = Number(num[0]);
    for (let i = 1; i < num.length; i++) {
      if (Number(num[i]) > maxNum) {
        maxNum = Number(num[i]);
      }
      if (Number(num[i]) < minNum) {
        minNum = Number(num[i]);
      }
    }
    return maxNum + ' ' + minNum;
  }
  
  const numbers = "1 2 -3 4 5";
  console.log(highAndLow(numbers)); // "5 -3" 

// 3)Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"   b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    let combined = s1 + s2;
    let unique = '';
    for (let i = 0; i < combined.length; i++) {
      if (unique.indexOf(combined[i]) === -1) {
        unique += combined[i];
      }
    }
    let result = '';
    for (let i = 0; i < unique.length; i++) {
      if (result.indexOf(unique[i]) === -1) {
        result += unique[i];
      }
    }
    return result;
  }
  console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // "abcdefklmopqwxy"

////


  function countBs(str) {
    const wordArray = str.split('B');
    const count = str.split
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (str.includes('B')) {
           str.split('B').length - 1;
        } else {
            return 0;
        } 
        return element;
    }
}

console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4

function isIsogram(sWord)
 {
  for (i = 0; i < sWord.length; i++){
    if (sWord.substring(i + 1).includes(sWord.charAt(i))){
        return false;
    }
      
  }

  return true;
 }
 console.log(isIsogram('ciao'));