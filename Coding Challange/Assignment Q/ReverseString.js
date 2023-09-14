function reverseString(input) {
    return input.split("").reverse().join("");
}

function reverseAfterDelay(input) {

    setTimeout(
        () => {
            const result = reverseString(input);
            console.log(result);
        }, 2000
        )
    }
    

const input = "abcdef";
reverseAfterDelay(input);




