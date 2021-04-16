// Iteration 1: All directors? - Get the array of all directors.
/*const getAllDirectors = movies.map((director)=> {
    const clone = { ...director};
    return clone
});
console.log(getAllDirectors);
console.log("____________________");*/


const getAllDirectors = function(movies) {
    return movies.map((movie) => {
        return movie.director;
    });
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = function(movies) {
    const stevenSpielbergMovies = movies.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
    });
    return stevenSpielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = function (movies){
    if (movies.length===0) return 0;
    const movieRates = movies.reduce((a, movie) => {
        return (movie.rate===undefined ? a : a += movie.rate);
      }, 0);
    console.log(movieRates);
    console.log(Number((movieRates/movies.length).toFixed(2)));
    return (Number((movieRates/movies.length).toFixed(2)));
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function (movies){
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
