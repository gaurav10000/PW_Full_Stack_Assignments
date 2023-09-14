
// method 1 for removing duplicate elements from array
function removeDuplicates(nums) {
    let set = new Set(nums)
    console.log(set);
}


// method 2 for removing duplicate elements from array 
function removeDuplicates1(nums) {
    nums.sort((a,b) => a - b) // this means sort array in ascending order
    let index = 0
    let result = new Array()
    while (index < nums.length) {
        if (nums[index] == nums[index + 1]) {
            ++index;
        }else {
            result.push(nums[index])
            ++index
        }
    } 
    return result
}

const arr = [1,2,3,4,5,6,2,2,3,4,5,1,10,9,12,11,13]

removeDuplicates1(arr)