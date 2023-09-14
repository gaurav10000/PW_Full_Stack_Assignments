

function randomDealy(delay) {
    
    id = setInterval(() => {
        
        if(delay % 1000 == 0 && delay != 0) {
            console.log(delay);
        }
        
        if(!delay > 0) {
            clearInterval(id)
            console.log(Math.random())
        }
        
        delay--;
        
    });
}

let delay = 3000
randomDealy(delay)