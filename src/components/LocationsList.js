import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";

export default function LocationsList() {
 // TODO: Add useState to track data from useEffect
 const [locations, setLocations] = useState([])
 useEffect(() => {
   // TODO: Add API Request here - must run in `useEffect`
   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   const getLocations = () => {
     axios
       .get('https://rickandmortyapi.com/api/location/')
       .then(response => {
         console.log(response)
         setLocations(response.data.results);
       })
       .catch(error => {
         console.error('Server Error', error);
       });
   }
   
   getLocations();
 }, []);

 return (
   <section className="character-list grid-view">

     {locations.map(location => (
       <Link to={`/Location/${location.id}`}>  
     <LocationCard name={location.name} type={location.type} dimension={location.dimension} /> </Link> ))}
       
   </section>
 );

     }
