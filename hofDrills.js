function repeat(fn, n){
    for(let i = 0; i<n; i++){
        fn();
    }
}

function hello(){
        console.log('Hello world');
}

function goodbye(){
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


// Filter drill

function filter(arr, fn) {
    // TASK: Define your function here
    let newArr = [];
    
<<<<<<< HEAD
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function (location){
        warningCounter += 1;
        let word = (warningCounter === 1) ? 'time' : 'times';
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${word} today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const blizzard = hazardWarningCreator('Blizzard');
const flood = hazardWarningCreator('Flood');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

blizzard('Main St and Pacific Ave');
blizzard('Centinela Ave and Olympic Blvd');

flood('Main St and Pacific Ave');
flood('Centinela Ave and Olympic Blvd');
=======
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function (location){
        warningCounter += 1;
        let word = (warningCounter === 1) ? 'time' : 'times';
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${word} today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const blizzard = hazardWarningCreator('Blizzard');
const flood = hazardWarningCreator('Flood');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

blizzard('Main St and Pacific Ave');
blizzard('Centinela Ave and Olympic Blvd');

flood('Main St and Pacific Ave');
flood('Centinela Ave and Olympic Blvd');


function turtle(arr){
    return  arr
              .filter(arr => arr[0] >= 0 && arr[1] >= 0)
              .map(arr => arr[0]+arr[1])
              .forEach(steps => console.log(steps));  
  }
  
  turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

function reduce(str){
    return str
              .split(' ')
              .reduce((acc, cur) => {
                if(cur.length === 3) return acc + ' ';
                else return acc + cur[cur.length-1];
                }, '')
              .toUpperCase();
  }

  console.log(reduce('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));