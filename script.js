const movies = [
   {
    title: "Encanto",
    description: "Data de lançamento: 25 de novembro de 2021",
    imageSrc: "https://play-lh.googleusercontent.com/E05H_CCcoTRnq69ZoCXph2U8ZN6TJ8Us4SBpyFY9T11XD5H3Q4dd2rr3JZyl0LdcKHIXJvog89YhR55dw2IA"
    },

    {
      title: "Moana",
      description: "Data de lançamento: 5 de janeiro de 2017",
      imageSrc: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg"
    },

    {
      title: "Red: Crescer é uma Fera",
      description: "Data de lançamento: 1 de março de 2022",
      imageSrc: "https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg"
    },

    {
      title: "Elementos",
      description: "Data de lançamento: 15 de junho de 2023",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdab6m1R38wYdsAjwcuGacJ80G27bD5oV0HlVR6aJoTS_3S3v"
    },

    {
      title: "Barbie",
      description: "Data de lançamento: 20 de julho de 2023",
      imageSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfrQw_ilMVXBYmS4Cnen202Sqmuy7l1o9eMy04Ba1DCYvF367-"
    },

    {
      title: "Super Mario Bros",
      description: "Data de lançamento: 5 de abril de 2023",
      imageSrc: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/regions/us/onesheet.jpg"
    },

    {
      title: "Nimona",
      description: "Data de lançamento: 23 de junho de 2023",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQg_qPNpCFkfh8m00LkjVgk3j7dEjpuowyGHfBQC8XL0l8V9zLZ"
    },

    {
      title: "Miraculous",
      description: "Data de lançamento: 5 de julho de 2023",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyGjVKaP42JztCmLEYI39MKnQ193jdZfV-bqob17_D5xrrAVPz"
    },

    {
      title: "A Chamada",
      description: "Data de lançamento: 24 de agosto de 2023",
      imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjDWJcz1ONJrRXRuEcn8rkZklqAKFbtGVVrG37nZg6H60I-ZrZ"
    },

    {
      title: "Guardiões da Galáxia",
      description: "Data de lançamento: 31 de julho de 2014",
      imageSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1P_hV6E3_OlEq4MdFMQje5SyBUkAH0JKasP_iVJG4HMT69xn2"
    }
];

function createMovieElement(movie) {

const movieDiv = document.createElement("div");
  movieDiv.className = "movie";

const movieImage = document.createElement("img");
  movieImage.src = movie.imageSrc;
  movieImage.alt = movie.title;

const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;

const movieDescription = document.createElement("p");
  movieDescription.textContent = movie.description;

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieDescription);

return movieDiv;
}

const movieList = document.getElementById("movie-list");
  movies.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    movieList.appendChild(movieElement);
});
