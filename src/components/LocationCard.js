import React from "react";
import { Card } from 'semantic-ui-react'
export default function LocationCard(props) {
  return (
    <Card >
    
    <Card.Content  key={props.id}>
      <Card.Header>  <h1>{props.name}</h1></Card.Header>
      <Card.Meta>
        <span className='date'> <h3> {props.type}</h3> </span>
      </Card.Meta>
      <Card.Description>
           <h5> {props.dimension}</h5>
           <h5>{props.residents}</h5>
      </Card.Description>
      <br></br>
      <button type ="submit">{`Like!`}</button>
    </Card.Content>
    
  </Card> 
  )
}
