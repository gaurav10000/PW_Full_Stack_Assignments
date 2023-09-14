

function minMax(nums) {
    [min, max] = [Math.min(...nums), Math.max(...nums)] // we cannot provide array to min, instead min expects a list. 

    return {
        max: max,
        min: min
    }
}

const nums = [1,2,3,4,5]

console.log(minMax(nums))


