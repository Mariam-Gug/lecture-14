
// პირველი დავალება

let arrayNums = [4, 6, 21, 79, 3, 56];

arrayNums.push('javascript', 'python');
arrayNums.unshift('html', 'css');
console.log(arrayNums.length);

arrayNums.shift();
arrayNums.pop();
console.log(arrayNums)

// მეორე დავალება

let arrayFruit = ['orange', 'banana', 'pear'];

console.log(arrayFruit.length);

arrayFruit.push('apple', 'pineapple');
arrayFruit.unshift('watermelon');

console.log(arrayFruit.length);

arrayFruit.splice(2, 0, 'mango');
arrayFruit.shift();
arrayFruit.pop();

console.log(arrayFruit);

// მესამე დავალება

let numbers = [12, 25, 3, 6, 8, 14, 7, 23];
let result = numbers.map(function(i) {
    return i / 3;
})

console.log(result);

// მეოთხე დავალება

let arrayAll = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let arrayOnlyNums = arrayAll.filter(function(i) {
    return typeof i == 'string';
})

console.log(arrayOnlyNums);


// მეხუთე დავალება

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let threeLetterWords = languages.filter( i => i.length > 3);

console.log(threeLetterWords);

// მეექვსე დავალება

//I
let array= [['academy', 'of'], ['digital', 'industries']].reduce(function(accumulator,currentValue) {
    return accumulator.concat(currentValue);
    },
    []
)

console.log(array);

//II
let array5= ['academy', 'of', 'digital', 'industries'];

console.log(array5.join(' '));

// მეშვიდე დავალება

let item = [12, 'google', 32, null, 'yahoo', 25];

let newItem = item.map(function(x) {
    if(typeof x == 'number') {
        return x * x
    } else if(typeof x == 'string') {
        return x.toUpperCase();
    } else {
        return x
    }
});

// მერვე დავალება

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let mWords = words.filter( i => i.includes('M') || i.includes('m'));

console.log(mWords);