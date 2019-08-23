import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationList from "./LocationsList";
import LocationCard from "./CharacterCard";


export default function Location(props) {
 
  const [location, setLocation] = useState([])
  useEffect(() => {
    const id = props.match.params.id
   
      axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(response => {
          console.log(response)
          setLocation(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
   
  }, []);

  return (
    <section className="character-list grid-view">

     
<LocationCard name={location.name} type={location.type} dimension={location.dimension} />
        
    </section>
  );
}