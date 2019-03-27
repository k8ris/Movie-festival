function Genre(genre) {
    this.genre = genre;
}
function Movie(title,length,genre) {
    Genre.call(this,genre);
    this.title = title;
    this.length = length;
}
function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Genre.prototype.getDataGenre =  function () {
    
    var firstLetter = this.genre.charAt(0);
    var lastLetter = this.genre.charAt(this.genre.length - 1);

    return firstLetter.toUpperCase() + lastLetter.toUpperCase();
}

Movie.prototype = Object.create(Genre.prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.getData = function() {
    return this.title + ', ' + this.length + 'min' + ', ' + this.getDataGenre();
}

Program.prototype.getProgramDuration = function () {
    var totalDuration = 0;
    this.listOfMovies.forEach(element => {
        totalDuration += parseFloat(element.length);
    })
    return totalDuration;
};
Program.prototype.addMovie = function(movie) {
    this.listOfMovies.push(movie);
}
Program.prototype.getData = function () {
    var date = this.date;
    var dateString = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    var programDuration = 'TBA';
    var output = '';
    if( this.listOfMovies.length == 0){
        output =  dateString  + ', program duration:' + programDuration + '\n';
    }
    else{    
        output = dateString + ", " + this.listOfMovies.length + ', duration:' + this.getProgramDuration() +  'min\n';
    }
    
    return output;   
}

