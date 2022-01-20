// To check if the Object has the key: 
//https://dmitripavlutin.com/check-if-object-has-property-javascript/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];
//nums[0] + nums[2] === targetSum1


const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, -2, 0];
const targetSum3 = 6;
const expected3 = [1, 5];


   
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw


function twoSum(nums, targetSum) {
  //given an unsorted array and a target sum
  // find out the possible combination that can add up to the target sum
  for (let i = 0; i < (nums.length - 1); i++) {
    for (let j = (i + 1); j < nums.length; j++) {
        if (nums[i] + nums[j] == targetSum) {
            return "Pair with a given sum " + targetSum + " is (" + nums[i] + ", " + nums[j] + ")";
        }
    }
}

return false;
}

console.log(twoSum(nums2,targetSum2))