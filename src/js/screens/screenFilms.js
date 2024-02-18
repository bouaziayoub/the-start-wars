import { Screen } from "./Screen";
import { getDetailsByUrl, getFilms } from "../api/apiFilm";
import { checkUserSessionStorage } from "../storage/storageUser";
import { showSpinner, hideSpinner } from "./spinner";
export class ScreenFilm extends Screen {
  constructor(screenFilm) {
    super(screenFilm);
    this.columnas = this.screen.querySelectorAll(".columna");

    // Check if the user exists in the sessionStorage
    if (checkUserSessionStorage()) {
      console.log("There is data stored in session storage");

      this.showFilms();
    } else {
      console.log("There is no data stored in session storage");
      alert("User not found!");
    }
  }

  // This a Function to show Fimls Titles and episod_id
  async showFilms() {
    // Here im usig the spinner...
    showSpinner();

    // Retrieve titles of movies.
    const movies = await getFilms();
    // DOMElements.searchContent.insertAdjacentHTML('beforeend',recipeListView.spinnerHTML);

    const moviesListElement = this.columnas[0].querySelector("ul");
    moviesListElement.innerHTML = "";

    movies.results.forEach((movie) => {
      movies.results.sort((a, b) => a.episode_id - b.episode_id);
      const movieElement = document.createElement("li");
      movieElement.id = movie.url;
      // Create Title
      const movieTitleElement = document.createElement("h6");

      movieTitleElement.innerHTML = `<b style="color: #54ad7a;">Nº:</b> ${movie.episode_id}
      <b style="color: #54ad7a;">Title: </b><u>${movie.title}  <b>Click to see details </b> </u>`;
      // define the class name a movieTileElement
      movieTitleElement.classList.add("pointer");
      movieElement.appendChild(movieTitleElement);
      moviesListElement.appendChild(movieElement);
    });
    // Here I am removing Spinner
    hideSpinner();

    // Listen to click event
    moviesListElement.addEventListener("click", (event) => {
      const movieElement = event.target.matches("li")
        ? event.target
        : event.target.closest("li");

      // Save url in a variable
      const urlDetailsFilm = movieElement.id;
      // console.log(urlDetailsFilm);
      if (checkUserSessionStorage()) {
        console.log("There is data stored in session storage");
        this.showMovieInfo(urlDetailsFilm);
      } else {
        console.log("There is no data stored in session storage");
        alert("User not found!");
      }
    });
  }

  // This is a function to show the information of every movie.
  async showMovieInfo(url) {
    // Here im usig the spinner...
    showSpinner();

    const movieDetails = await getDetailsByUrl(url);
    // console.log(movieDetails.director);

    const infoMovieListElement = this.columnas[1].querySelector("ul");
    infoMovieListElement.innerHTML = "";
    const titleFilm = document.createElement("li");
    titleFilm.innerHTML = `<b style="color: #54ad7a;" >Title:</b> ${movieDetails.title}`;

    // Creamos nombre
    const episodeId = document.createElement("p");
    episodeId.innerHTML = `<b style="color: #54ad7a;">Episode Id:</b> ${movieDetails.episode_id}`;
    titleFilm.appendChild(episodeId);

    const openingCrawl = document.createElement("p");
    openingCrawl.innerHTML = `<b style="color: #54ad7a;">Opening Crawl:</b> <br> ${movieDetails.opening_crawl}`;
    titleFilm.appendChild(openingCrawl);

    const releaseDate = document.createElement("p");
    releaseDate.innerHTML = `<b style="color: #54ad7a;">Release Date:</b>  ${movieDetails.release_date}`;
    titleFilm.appendChild(releaseDate);

    const director = document.createElement("p");
    director.innerHTML = `<b style="color: #54ad7a;">Director:</b>  ${movieDetails.director}`;
    titleFilm.appendChild(director);

    const producer = document.createElement("p");
    producer.innerHTML = `<b style="color: #54ad7a;">Producer:</b>  ${movieDetails.producer}`;
    titleFilm.appendChild(producer);

    infoMovieListElement.appendChild(titleFilm);

    // save planets urls in a variable
    const urls = movieDetails.planets;

    // Here I am removing Spinner
    hideSpinner();

    this.showNamePlanet(urls);
  }

  // This is a function to show all the planet of every movie.
  showNamePlanet(urls) {
    const urlPlanets = urls;
    // console.log(urlPlanets);
    const listPlanet = document.getElementById("planetName");
    // define the Class listPlanet
    listPlanet.classList.add("pointer");
    listPlanet.innerHTML = "";
    urlPlanets.forEach((url) => {
      // call the function child.
      getNameByURL(url);
      // It is a child function that allows the fetch request to be made using the other getPlanetByUrl
      // function of each url that we pass to it as a parameter.
      async function getNameByURL(url) {
        const planetDetails = await getDetailsByUrl(url);
        console.log(planetDetails);
        const planetElement = document.createElement("li");
        planetElement.id = planetDetails.url;
        // Create Title
        const namePlanet = document.createElement("h6");
        namePlanet.innerHTML = ` <b style="color: #54ad7a;">Planet Name:</b> <u>${planetDetails.name} <b>Click to see details </b></u>`;

        planetElement.appendChild(namePlanet);
        listPlanet.appendChild(planetElement);
      }
    });

    listPlanet.addEventListener("click", (event) => {
      const planetUrlElement = event.target.matches("li")
        ? event.target
        : event.target.closest("li");
      console.log(planetUrlElement.id);
      const urlP = planetUrlElement.id;
      this.showPlanetInfo(urlP);
    });
  }

  // This is a function to show the information of every Planet.
  async showPlanetInfo(url) {
    showSpinner();
    const planetDetails = await getDetailsByUrl(url);
    // console.log(planetDetails.director);

    const plantListElement = this.columnas[2].querySelector("ul");
    plantListElement.innerHTML = "";

    // Creamos nombres de planetas
    const PlanetName = document.createElement("li");
    PlanetName.innerHTML = `<b style="color: #54ad7a;">Planet Name:</b> ${planetDetails.name}`;

    const rotation_period = document.createElement("p");
    rotation_period.innerHTML = `<b style="color: #54ad7a;">Rotation Period:</b>  ${planetDetails.rotation_period}`;
    PlanetName.appendChild(rotation_period);

    const orbital_period = document.createElement("p");
    orbital_period.innerHTML = `<b style="color: #54ad7a;">Orbital Period:</b>  ${planetDetails.orbital_period}`;
    PlanetName.appendChild(orbital_period);

    const diameter = document.createElement("p");
    diameter.innerHTML = `<b style="color: #54ad7a;">Diameter:</b>  ${planetDetails.diameter}`;
    PlanetName.appendChild(diameter);

    const climate = document.createElement("p");
    climate.innerHTML = `<b style="color: #54ad7a;">Climate:</b>  ${planetDetails.climate}`;
    PlanetName.appendChild(climate);

    const gravity = document.createElement("p");
    gravity.innerHTML = `<b style="color: #54ad7a;">Gravity:</b>  ${planetDetails.gravity}`;
    PlanetName.appendChild(gravity);

    const terrain = document.createElement("p");
    terrain.innerHTML = `<b style="color: #54ad7a;">Terrain:</b>  ${planetDetails.terrain}`;
    PlanetName.appendChild(terrain);

    const surface_water = document.createElement("p");
    surface_water.innerHTML = `<b style="color: #54ad7a;">Surface Water:</b> ${planetDetails.surface_water}`;
    PlanetName.appendChild(surface_water);

    const population = document.createElement("p");
    population.innerHTML = `<b style="color: #54ad7a;">Episode Id:</b>  ${planetDetails.population}`;
    PlanetName.appendChild(population);

    plantListElement.appendChild(PlanetName);
    hideSpinner();
  }
}
