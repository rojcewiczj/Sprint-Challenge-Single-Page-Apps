import React, { useEffect, useState } from "react";
import axios from 'axios'

import EpisodeCard from "./EpisodeCard";


export default function Episode(props) {
 
  const [episode, setEpisode] = useState([])
  useEffect(() => {
    const id = props.match.params.id
   
      axios
        .get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => {
          console.log(response)
          setEpisode(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
   
  }, []);

  return (
    <section className="character-list grid-view">

     
<EpisodeCard name={episode.name} type={episode.air_date} dimension={episode.episode} />
        
    </section>
  );
}