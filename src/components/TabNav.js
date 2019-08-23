import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
     const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]
      
      const TabExampleBasic = () => <Tab panes={panes} />
return (
   
    <div>
  <div class="ui attached tabular menu">
    <a class="active item">Tab 1</a>
    <a class="item">Tab 2</a>
    <a class="item">Tab 3</a>
  </div>
  <div class="ui bottom attached segment active tab">Tab 1 Content</div>
</div>
)
};

