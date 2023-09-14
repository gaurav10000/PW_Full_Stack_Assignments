// defininf a function to filter out a list of books published after 2010 with their author names capitalised

function filterBooks(books) {
    let newBooksList = new Array()
    books.forEach(ele => {
        if (ele[2] > 2010) {
            ele[1] = ele[1].charAt(0).toUpperCase() + ele[1].slice(1).toLowerCase()
            newBooksList.push([ele[0], ele[1], ele[2]])
        }
    });
    return newBooksList
}

books = [
    ["To Kill a Mockingbird", "harper lee", 1960],
    ["1984", "george orwell", 1949],
    ["The Great Gatsby", "f. scott fitzgerald", 1925],
    ["Pride and Prejudice", "jane austen", 1813],
    ["The Catcher in the Rye", "j.d. salinger", 1951],
    ["The Lord of the Rings", "j.r.r. tolkien", "1954-1955"],
    ["To the Lighthouse", "virginia woolf", 1927],
    ["Brave New World", "aldous huxley", 1932],
    ["Moby-Dick", "herman melville", 1851],
    ["The Hobbit", "j.r.r. tolkien", 1937],
    ["The Hunger Games", "suzanne collins", 2008],
    ["The Girl with the Dragon Tattoo", "stieg larsson", 2005],
    ["The Help", "kathryn stockett", 2009],
    ["The Road", "cormac mccarthy", 2006],
    ["Game of Thrones", "george r.r. martin", 1996],
    ["Divergent", "veronica roth", 2011],
    ["The Fault in Our Stars", "john green", 2012],
    ["The Maze Runner", "james dashner", 2009],
    ["Gone Girl", "gillian flynn", 2012],
    ["The Book Thief", "markus zusak", 2005],
    ["The Martian", "andy weir", 2011],
    ["The Girl on the Train", "paula hawkins", 2015]
  ]

console.log(filterBooks(books));