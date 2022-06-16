const API_KEY = "d47af920ad6bc3270a7cd649e1139579"

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`
  },
  {
    name: "terror",
    title: "Terror",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=27`
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
  }
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("error getMovies: ", error);
  }
}