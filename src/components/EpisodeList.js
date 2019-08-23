import React, { useEffect, useState } from "react";
import axios from 'axios'
import EpisodeCard from "./EpisodeCard";
import { Link } from "react-router-dom";

export default function EpisodeList() {
 // TODO: Add useState to track data from useEffect
 const [episodes, setEpisodes] = useState([])
 useEffect(() => {
   // TODO: Add API Request here - must run in `useEffect`
   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   const getEpisodes = () => {
     axios
       .get('https://rickandmortyapi.com/api/episode/')
       .then(response => {
         console.log(response)
         setEpisodes(response.data.results);
       })
       .catch(error => {
         console.error('Server Error', error);
       });
   }
   
   getEpisodes();
 }, []);

 return (
   <section className="character-list grid-view">

     {episodes.map(episode => (
          <Link to={`/Episode/${episode.id}`}>  
     <EpisodeCard name={episode.name} type={episode.air_date} dimension={episode.episode} /> </Link>))}
       
   </section>
 );

     }