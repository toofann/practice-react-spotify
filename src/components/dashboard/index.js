import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Librares from "./librares";
import Home from "../root/home";
import Search from "./search";
import { ReactComponent as homeSvg } from "../../assets/home.svg";
import { ReactComponent as searchSvg } from "../../assets/search.svg";
import { ReactComponent as liberaresSvg } from "../../assets/liberares.svg";
import DashboardSidebar from "./dashboardSidebar";

let DashboardMain = styled.div`
  background-color: #8affff;
  margin: 0 auto;
  border: 2px solid #8affff;
  width: 60%;
  min-height: 400px;
  position: relative;
`;

class Dashboard extends Component {
  state = {
    isOpen: false
  };
  constructor(props) {
    super(props);
    const dashPath = this.props.match.path;
    this.routes = [
      {
        name: "Home",
        path: `${dashPath}/`,
        exact: true,
        icon: homeSvg,
        component: Home
      },
      {
        name: "Search",
        path: `${dashPath}/search`,
        icon: searchSvg,
        component: Search
      },
      {
        name: "Libraries",
        path: `${dashPath}/liberares`,
        icon: liberaresSvg,
        component: Librares
      }
    ];
  }

  ToggleSidebar = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };
  render() {
    return (
      <DashboardMain>
        {this.routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        {/* <Route path={`${dashPath}/home`} component={Home} />
         <Route path={`${dashPath}/search`} component={Search} />
         <Route path={`${dashPath}/liberares`} component={Librares} /> */}
        {/* <Sidebar
          ToggleSidebar={this.ToggleSidebar}
          isOpen={this.state.isOpen}
          dashPath={dashPath}
        />*/}
        <DashboardSidebar
          onClick={this.ToggleSidebar}
          isOpen={this.state.isOpen}
        >
          <DashboardSidebar.SidebarLogo />
          {this.routes.map(item => (
            <DashboardSidebar.SidebarItem
              key={item.name}
              to={item.path}
              icon={item.icon}
              text={item.name}
              exact={item.exact}
            />
          ))}
        </DashboardSidebar>
      </DashboardMain>
    );
  }
}
export default Dashboard;
