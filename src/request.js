const Apikey = '1828dc6fe548be842d9bafb3e0db06ea';
const request ={
    fetchTrending: `/trending/all/week?api_key=${Apikey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${Apikey}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${Apikey}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${Apikey}&with_genres=28`,
	findComedyMovies: `/discover/movie?api_key=${Apikey}&with_genres=35`,
	findAdventureMovies: `/discover/movie?api_key=${Apikey}&with_genres=12`,
	findRomanceMovies: `/discover/movie?api_key=${Apikey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${Apikey}&with_genres=99`,

}
export default request;