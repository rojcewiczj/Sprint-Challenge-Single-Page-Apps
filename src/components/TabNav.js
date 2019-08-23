import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const panes = [
    { menuItem: 'HomePage', render: () => <NavLink to="/WelcomePage"> <Tab.Pane>HomePage</Tab.Pane> </NavLink>},
    { menuItem: 'Characters', render: () => <NavLink to="/CharacterList"><Tab.Pane>Characters</Tab.Pane></NavLink> },
    { menuItem: 'Locations', render: () => <NavLink to="/LocationsList"><Tab.Pane>Locations</Tab.Pane> </NavLink>},
    { menuItem: 'Episodes', render: () => <NavLink to="/EpisodeList"><Tab.Pane>Episodes</Tab.Pane> </NavLink>},
  ]
export default function TabNav() {
    
      
return (
    
    <div><Tab panes={panes} />
  </div>
)
};

