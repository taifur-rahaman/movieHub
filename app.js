const API_URL = "http://www.omdbapi.com/?apikey=[3c1d9b56]&";
const SEARCH_API = "http://www.omdbapi.com/?t=";
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovie(API_URL);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  getMovie(API_URL + searchTerm);
});
