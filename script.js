"use strict";
// 1.
const submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true },
  ];

const oldSubmissions = [
    { name: "Andrea", score: 20, date: "2018-01-24", passed: false },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
    // push to "placeholder array (parameter)"
    // dynamic destination for whatever we push
    let newPassed = null;
    if(newScore >= 60){
        newPassed = true;
    } else {
        newPassed = false;
    }
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed,
    }
    array.push(newSubmission);
};

// addSubmission(oldSubmissions, "James", 10, "2018-01-24");
// console.log(oldSubmissions);
// addSubmission(submissions,  "James", 90, "2018-01-24" );
// console.log(submissions);

const addSubmissionV2 = (array, name, score, date) => {
    const newSubmission = {
        // name: name,
        // shorthand for object key/value pairs: we can only do this bc the key (left of :) is spelled the same as the variable (right of the :)
        name,
        // score : score,
        score,
        // date : date,
        date,
        passed: score >= 60,
    }
    array.push(newSubmission);
};

// 3.
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

// deleteSubmissionByIndex(oldSubmissions, 0);
// // console.log(oldSubmissions);
// deleteSubmissionByIndex(submissions, 2);
// // console.log(submissions);


// 4.
const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((string) => {
        return string.name === name;
    });
    array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);


// 5. 
const editSubmission = (array, index, score) => {
    array[index].score = score;
    if(array[index].score >= 60){
       return array[index].passed = true;
    } else {
       return array[index].passed = false;
    }
};

// editSubmission(submissions, 0, 90);
// console.log(submissions);

// 6.
const findSubmissionByName = (array, name) => {
    let result = array.find((string) => {
        return string.name === name;
    });
    if (result === undefined) {
        return `${name} was not in our list`;
    } else {
        return result;
    }
};

// console.log(findSubmissionByName(submissions, "Jack"));


// 7. "The superlative" (the most of something) - deck of cards
const findLowestScore = (array) => {
    // 1. assign lowest score to first thing
    let lowestScoreHolder = array[0]; //array[0] is an object
    // 2. loop through all the things
    array.forEach((submissionFromArray) => {
        // 3a. check if there's a lower score
        // 3b. .... IF there is: hand over the title
        if(submissionFromArray.score < lowestScoreHolder.score) {
            lowestScoreHolder = submissionFromArray; 
        }
    }); 
    // 4. once we are done looping thru ENTIRE array , return lowest score: 
    return lowestScoreHolder;
};

// console.log(findLowestScore(submissions));

// 8.
const findAverageScore = (array) => {
    let sum = 0;
    for (let item of array){
        let score = item.score;
        sum += score; 
    }
    return sum / array.length;

};

// console.log(findAverageScore(submissions));

// 9. 
const filterPassing = (array) => {
    let newArray = array.filter((score) => {
        return score.passed;    
    });
    return newArray;
}

// console.log(filterPassing(submissions));

// 10.
const filter90AndAbove = (array) => {
    let arrayWith90Above = array.filter((item) => {
        return item.score >= 90;
    })
    return arrayWith90Above;
}

// console.log(filter90AndAbove(submissions));

// EXTENDED CHALLENGES ---------------------------------------

// 1. 
const createRange = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
};

// console.log(createRange(2,5));

