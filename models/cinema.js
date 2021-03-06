const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {

  const titles = this.films.map(film => {
    return film.title;
  });
  return titles
};

Cinema.prototype.findByTitle = function (title) {
  // const foundTitle = this.films.filter((film) => {
  //   return film.title === title;
  // })
  // return foundTitle[0];
  const foundTitle = this.films.find((film) => {
    return film.title === title;
  })
  return foundTitle;
};

Cinema.prototype.findByGenre = function (genre) {
  const foundTitles = this.films.filter((film) => {
    return film.genre === genre;
  })
  return foundTitles;
};

Cinema.prototype.hasYear = function (year) {
  const filmsYear = this.films.map(film => film.year);
  const hasYear = filmsYear.includes(year);
  return hasYear;
};

Cinema.prototype.filmDuration = function (duration) {
  const filmLength = this.films.map(film => film.length);
  let result;
  filmLength.forEach(film => {
    if (film > duration){
      result = true;
    }
  });
  return result;
};

Cinema.prototype.totalRunTime = function () {
  const filmLength = this.films.map(film => film.length);
  let total = filmLength.reduce((runningTotal, number) => {
    return runningTotal + number
  })
  return total;
};
module.exports = Cinema;
