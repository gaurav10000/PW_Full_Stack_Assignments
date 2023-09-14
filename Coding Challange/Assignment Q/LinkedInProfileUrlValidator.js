

function linkedInProfileValidator(profileUrl) {
    const pattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/;
    
    return pattern.test(profileUrl)
}


const url1 = "https://www.linkedin.com/in/gaurav"
const url2 = "https://www.linkedin.com/in/q234124"
const url3 = "https://www.linkedin.com/in/q23412@"

console.log(linkedInProfileValidator(url1));
console.log(linkedInProfileValidator(url2));
console.log(linkedInProfileValidator(url3));