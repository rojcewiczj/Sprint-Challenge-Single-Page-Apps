import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <main>
      <Header />
      <TabNav /> 
      <Route exact path ="/WelcomePage" render={props =><WelcomePage   />} /> 
      <Route exact path ="/CharacterList" render={props =><CharacterList  />} /> 
      <Route exact path ="/LocationsList" render={props =><LocationList />} /> 
      <Route exact path ="/EpisodeList" render={props =><EpisodeList />} />
      
    </main>
  );
}
