

function urlValidator(url) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._?&=]*)?$/;

    return urlPattern.test(url)
}

const url1 = "https://google.com"
const url2 = "http://thisIsnotValidUrl"

console.log(urlValidator(url2));