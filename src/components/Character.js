import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";


export default function Character(props) {
 
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const id = props.match.params.id
   
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          console.log(response)
          setCharacter(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
   
  }, []);

  return (
    <section className="character-list grid-view">

     
      <CharacterCard name={character.name} status={character.status} species={character.species} image={character.image}/> 
        
    </section>
  );
}