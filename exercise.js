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

console.log('booleanToString', booleanToString(true) === "true");
console.log('booleanToString', booleanToString(false) === "false");

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

console.log('basicOp', basicOp("+", 4, 7) === 11);
console.log('basicOp', basicOp("-", 15, 18) === -3);
console.log('basicOp', basicOp("*", 5, 5) === 25);
console.log('basicOp', basicOp("/", 49, 7) === 7);



function removeAllSpaces(str){
    // const nospace = str.replace(/ /g, '');
    // return nospace;
    const wordArray = str.split(' ')
    const nospace = wordArray.join('');
    return nospace;
}

console.log('removeAllSpaces',removeAllSpaces("pippo") === "pippo");
console.log('removeAllSpaces',removeAllSpaces("   ") === "");
console.log('removeAllSpaces',removeAllSpaces("le mutande di mia nonna") === "lemutandedimianonna");


function calculateBMI(weight, height){
    const proportion = weight/(height**2);
    if (proportion <= 18.5) {
        return 'Underweight';
    } else if (proportion > 18.5 && proportion <= 25) {
        return 'Normal';
    } else if (proportion > 25 && proportion <= 30) {
        return 'Overweight'
    } else {
        return 'Obese';
    }
}


console.log('calculateBMI', calculateBMI(170, 1.60)==='Obese')
console.log('calculateBMI', calculateBMI(57, 1.66)==='Normal')



function countBs(str){
    let accumulator = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === 'B') {
            accumulator++;
        }
    }
    return accumulator;
}

console.log('countBs', countBs('Babboleo') === 1)
console.log('countBs', countBs('BABBOLEO') === 3)


function countChar(str, selectedChar){
    let accumulator = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === selectedChar) {
            accumulator++;
        }
    }
    return accumulator;
}

console.log('countChar', countChar('Babboleo', 'o') === 2)
console.log('countChar', countChar('BABBOLEO', 'l') === 0)


function countChar2(str, selectedChar){
    //'la casa rosa'
    //['la', 'casa', 'rosa']
    //length = 3
    //count = 2
    const wordArray = str.split(selectedChar);
    const count = wordArray.length - 1;
    return count;
}


console.log('countChar2', countChar2('Babboleo', 'o') === 2)
console.log('countChar2', countChar2('BABBOLEO', 'l') === 0)




function isogram(word){

    for (let i = 0; i < word.length; i++) {
        
        for (let j = i + 1; j < word.length; j++){
          
            if (word[i] === word[j]) {
                return false
            }


        }
        
    }
    return true;

}

console.log('isogram', isogram('cacca') === false);
console.log('isogram', isogram('cane') === true);

function isogram2(word){

    for (let i = 0; i < word.length; i++) {
        if (word.substring(i+1).includes(word[i])) {
            return false;
        }
    }
    return true;

}


console.log('isogram2', isogram2('cacca') === false);
console.log('isogram2', isogram2('cane') === true);


function isogram3(word){

    for (let i = 0; i < word.length; i++) {
        const charToCount = word[i];
        const wordArray = word.split(charToCount);
        const count = wordArray.length - 1;
        if(count > 1){
            return false;
        }
    }
    return true;

}


console.log('isogram3', isogram3('cacca') === false);
console.log('isogram3', isogram3('cane') === true);