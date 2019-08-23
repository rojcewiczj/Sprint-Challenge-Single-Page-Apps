import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav /> 
      <CharacterList />
      <LocationList />
      <EpisodeList />
    </main>
  );
}
