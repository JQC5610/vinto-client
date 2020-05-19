import React, { Component } from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

// import "./style.css";


class HeaderVinto extends Component {
    render(){
        return(
          <div className="container">
              <div className="Hero">
                <div className="HeroGroup">
                  <h1>Vinto</h1>
                  <br></br>
                  <br></br>
                  <p>Conquer Your Content</p>
                </div>
              </div>              
              <Header aria-label="Vinto Application">
                <HeaderName href="#" prefix="Vinto">
                  Home
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                  <HeaderMenu aria-label="2020" menuLinkName="2020">
                    <HeaderMenuItem href="#">May</HeaderMenuItem>
                    <HeaderMenuItem href="#">June</HeaderMenuItem>
                    <HeaderMenuItem href="#">July</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
              </Header>              
          </div>
        );  
        }
    } 

export default HeaderVinto;