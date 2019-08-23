import React from "react";
import { Card } from 'semantic-ui-react'
export default function CharacterCard() {
  return (<Card >
    
    <Card.Content  key={props.id}>
      <Card.Header>  <h1>{member.name}</h1></Card.Header>
      <Card.Meta>
        <span className='date'> <h3> {member.role}</h3> </span>
      </Card.Meta>
      <Card.Description>
           <h5>email: {member.email}</h5>
      </Card.Description>
      <br></br>
      <button type ="submit">{`Edit ${member.name}`}</button>
    </Card.Content>
    
  </Card> )
}
