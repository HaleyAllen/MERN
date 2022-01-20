
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];


function orderedIntersection(sortedA,sortedB){
var duplicate = []
var duplicateShortened = []
    for (var i = 0; i < sortedA.length; i++){
        for (var j = 0; j < sortedB.length; j++){
            if (sortedB[j] === sortedA[i]){
                duplicate.push(sortedB[j])
            }
        }
    }
    for (var i = 0; i < duplicate.length; i++){
        if (duplicateShortened[duplicateShortened.length-1] != duplicate[i]){
            duplicateShortened.push(duplicate[i])
        }
    }
    return duplicateShortened
}

console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))
