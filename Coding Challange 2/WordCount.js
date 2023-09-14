

function wordCound(str) {
    if (str == "") return "String is Empty"
    let map = new Map()
    const words = str.split(" ")

    words.forEach(element => {
        if(element.charAt(element.length-1) < 'a' || element.charAt(element.length-1) > 'z' ) {
            if (map[element.slice(0,element.length-1)]) {
                map[element.slice(0,element.length-1)]++
            }else{
                map[element.slice(0,element.length-1)] = 1
            }
            return
        }
        if (map[element]) {
            map[element]++
        }else{
            map[element] = 1
        }
    });
    return map
}

const str = "This is a test. This is a test! This is a test?"
const str2 = ""
const str3 = "The price of the product is $19.99. The product costs $19.99."

console.log(wordCound(str4))

