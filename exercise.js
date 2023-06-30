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



const accum = (s) => [...s].reduce((a, c, i, o) => a + c.toUpperCase() 
                                                     + c.toLowerCase().repeat(i) 
                                                     + (i !== o.length - 1 ? '-' : '') , '');

console.log(accum('abc'))


//'' + 'A' + '' + '-' => 'A-'
//'A-' + 'B' + 'b' + '-' => 'A-Bb-'
//'A-Bb-' + 'C' + 'cc' + '' => 'A-Bb-Ccc'

// function reverseNumber(n){
//     const nString = n + '';
//     //console.log('nString', nString);
//     // const nStringArray = [...nString];
//     const nStringArray = nString.split('');
//     //console.log("🚀 ~ file: exercise.js:191 ~ reverseNumber ~ nStringArray:", nStringArray);
//     const reversedNStringArray = nStringArray.reverse();
//     //console.log("🚀 ~ file: exercise.js:193 ~ reverseNumber ~ reversedNStringArray:", reversedNStringArray)
//     const reversedNArray = reversedNStringArray.map((e) => parseInt(e));
//     //console.log("🚀 ~ file: exercise.js:195 ~ reverseNumber ~ reversedNArray:", reversedNArray)
//     return reversedNArray;

// }

// console.log(reverseNumber(9234))



// console.log(3 === 3);

// let pippo = 5;
// let pluto = 5;

// console.log(pippo === pluto);

// let qui = 'paperino';
// let quo = 'paperino';

// console.log(qui === quo);

// const student1 = {name: 'manuela', yob: 1988};
// const student2 = {name: 'luca', yob: 1999};
// const student3 = {name: 'manuela', yob: 1988};

// console.log(student1 === student2);
// console.log(student1 === student3);

// const student4 = student1;

// student1.name = 'isabella'

// console.log(student1);
// console.log(student4);


// const manuela = {
//                     name: 'manuela',
//                     yob: 1988,
//                     dog:{
//                         name:'nala'
//                     }
//                 }

// Object.freeze(manuela);

// manuela.yob = 2000;
// manuela.dog.name = 'pluto';

// console.log(manuela);



// const luca = {name: 'luca', yob: 2005, hobby: 'gaming'};

// console.log(luca);


// luca.hobby = 'coding';

// console.log(luca);


// const array = [manuela, luca];


// console.log(JSON.stringify(array));

// manuela.dog.name = 'clarabella';

// console.log(array);



const number1 = 5;

let damiano = {name: 'damiano', yob: 1993};


function multiplyBy3(n) {
    n = n * 3;
    return n;
}

function multiplyYobBy3(person){
    const result = person.yob * 3;
    return result;
}


console.log(multiplyBy3(number1));
console.log(number1);

console.log(multiplyYobBy3(damiano));
console.log(damiano);


function capitalizePersonName(person){
    // const newPerson = {name: person.name.toUpperCase(), yob: person.yob};
    const newPerson = {...person}
    newPerson.name = person.name.toUpperCase();
    return newPerson;
}

damiano = capitalizePersonName(damiano);

console.log(damiano)