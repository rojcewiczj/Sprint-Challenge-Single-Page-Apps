import React from "react";
import { Card, Image } from 'semantic-ui-react'
export default function CharacterCard(character) {
  return (<Card >
     <Image src={character.image} wrapped ui={false} />
    <Card.Content  key={character.id}>
      <Card.Header>  <h1>{character.name}</h1></Card.Header>
      <Card.Meta>
        <span className='date'> <h3> {character.status}</h3> </span>
      </Card.Meta>
      <Card.Description>
           <h5> {character.species}</h5>
      </Card.Description>
      <br></br>
      <button type ="submit">{`Like!`}</button>
    </Card.Content>
    
  </Card> )
}
