import { useState } from 'react'
import './App.css'
import Row from './Component/Row'
import request from './request'
import Banner from './Component/Banner'
import Navbar from './Component/Navbar'

function App() {
  
  return (
    <>
    <Navbar />
    <Banner />
      <Row title="Netflix originals" 
      fetchurl={request.fetchNetflixOriginals}
      islargerow
      />
      <Row title="Trending now"
      fetchurl={request.fetchTrending} />
       <Row title="Top rated"
      fetchurl={request.fetchTopRatedMovies} />
       <Row title="Action movies"
      fetchurl={request.fetchActionMovies} />
      <Row title="Comedy movies"
      fetchurl={request.findComedyMovies} />
      <Row title="Adventure movies"
      fetchurl={request.findAdventureMovies} />
      <Row title="Romance movies"
      fetchurl={request.findRomanceMovies} />
      <Row title="Documentaries"
      fetchurl={request.fetchDocumentaries} />
    </>
  )
}

export default App
