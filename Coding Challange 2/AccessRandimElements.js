
// this method is not copletely correct, I saw this in solutions provided below assignment, please have a look at this

function accessRandomElements0(arr) {
    const [first, second, , , , last] = arr;
    return [first, second, last];
}

// this is a full proof method to do the required job
function accessRandomElements1(arr) {
    const [a,b, ...z] = arr

    last = z.pop()
    return [a,b, last]
}

let nums = [1,2,3,4,5,6]

console.log(accessRandomElements1(nums))