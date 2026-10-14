 const prompt = require('prompt-sync')();

movies = []

function addMovie(){
    let input = (prompt("Enter a movie title: " ))
    movies.push(input)
    console.log(`Movie added succesfuly!`)
    }
    return movies


function removeMovie(){
    let remove = (prompt(`Which movie to delete. \n ${movies}`))
    var resultIndex = grades.indexOf(remove)

    if (resultIndex !== -1) {
        let found = movies.splice(resultIndex, 1);
        return found
    }
    else {console.log("Movie does not exist: ")}
   }

function searchMovie(){
    let search = movies.toLowerCase().indexOf(x.toLowerCase())
    if (search !== -1){
        console.log("Movie found!")
    }
    else {console.log("Movie not found..")}
}

function countMovie(){
    let count = movies.length
    return count
    
}

function upperMovie(){
    let input = prompt(`Enter a movie to make all caps.`)
    let uc = input.toUpperCase();
    return uc
}

function menuMovies(){
    while (true){
    let inp = Number(prompt(" Movie Collection Manager  \n\n 1. Add Movie \n 2. Remove Movie \n 3. Search Movie \n 4. Print All Movies \n 5. Count Movies \n 6. Display Uppercase \n 7. Exit \n\n Enter your choice:   "));
    
    if (inp === 7){
    console.log("===========Bye bye..");
    break;
    }
    if (inp === 6 ){
        upperMovie()
        uc = ucc
        console.log(ucc)
    }
    else if(inp === 5){
        count = countMovie()
        console.log(`There are ${count} movies in the collection`) 
    }

    else if (inp === 4){
        for( let d = 0; d < movies.length; d++){
    console.log(`==========${d+1}. ${movies[d]}`) 
        }
    
    }
    else if (inp === 3){
       searchMovie(x)
       let x = (prompt(`Enter movie title: `))

    }
    else if (inp === 2){
        let found = removeMovie()
        console.log(`===========Removed ${found} \n ${movies}`)}
    
    else if (inp === 1){
        addMovie()
        console.log(`==========Added.\n ${movies}`)
    }

    else {console.log(`==========Not an option \n ${inp}`)}
    }
    return 
}

menuMovies()

