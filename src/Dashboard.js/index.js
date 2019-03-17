import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink, Route } from "react-router-dom";
// import Sidebar from "./DashboardSidebars";
import DashboardSidebar from "./DashboardSidebars";
import { ReactComponent as Spotifylogo } from "../assets/Spotifylogo.svg";
import { ReactComponent as Searchicon } from "../assets/Searchicon.svg";
import { ReactComponent as Homeicon } from "../assets/Homeicon.svg";
import { ReactComponent as Libraryicon } from "../assets/Libraryicon.svg";
import Home from "./Home";
import Search from "./Search";
import Libraries from "./Library";

const DashboardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 100px;
  grid-template-areas:
    "sidebar main"
    "player player";
`;
// ********** روش اول **********
// const Sidebarlogo = styled(Spotifylogo)`
//   color: white;
//   width: 100%;
//   padding: 15px;
//   margin-bottom: 10px;
//   &:hover {
//     background-color: #131118;
//     cursor: pointer;
//   }
// `;
// const activeClassName = "Active";
// const SidebarItem = styled(NavLink).attrs(props => {
//   return {
//     activeClassName: activeClassName,
//     onClick: e => e.stopPropagation()
//   };
// })`
//   position: relative;
//   display: flex;
//   padding: 5px;
//   flex-direction: row;
//   justify-content: center;
//   text-align: center;
//   width: 100%;
//   height: 50px;
//   margin-bottom: 15px;
//   font-size: 20px;
//   color: white;
//   &.${activeClassName + "::before"} {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     width: 5px;
//     background-color: green;
//   }
//   /* &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     width: 5px;
//     background-color: green;
//     display: none;
//   }
//   &.${activeClassName + "::before"} {
//     display: block;
//   } */
//   &:hover {
//     background-color: #131118;
//     cursor: pointer;
//   }
//   &:link,
//   &:visited,
//   &:active {
//     text-decoration: none;
//   }
// `;
// const SidebarText = styled.span`
//   flex: 1;
//   text-align: left;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   margin-left: 5px;
// `;
// const sidebarOpenClassName = "sidebar-open";
// const sidebarCloseClassName = "sidebar-close";
// const DashboardSidebar = styled.div.attrs(props => {
//   return {
//     className: props.isopen ? sidebarOpenClassName : sidebarCloseClassName
//   };
// })`
//   grid-area: sidebar;
//   background-color: black;
//   transition: width 0.4s ease-out;
//   width: ${props => (props.isopen ? "200px" : "100px")};
// `;
// const SibebarIcon = styled.img`
//   width: 1.75em;
//   height: 1.75em;
//   position: relative;
//   top: -0.125em;
//   display: inline-block;
//   vertical-align: middle;
//   ${DashboardSidebar}.${sidebarOpenClassName} &{
//     margin-left:15px;
//   }
//   ${DashboardSidebar}.${sidebarCloseClassName} &{
//     margin-left:0px;
//   }
// `;

const DashboardMain = styled.div`
  grid-area: main;
  background-color: purple;
`;
const DashboardPlayer = styled.div`
  grid-area: player;
  background-color: gray;
`;

class Dashboard extends Component {
  state = {
    open: false
  };
  constructor(props) {
    super(props);
    const currentPath = props.match.path;
    this.routes = [
      {
        name: "Home",
        path: `${currentPath}/`,
        exact: true,
        icon: Homeicon,
        component: Home
      },
      {
        name: "Search",
        path: `${currentPath}/Search`,
        icon: Searchicon,
        component: Search
      },
      {
        name: "Library",
        path: `${currentPath}/Library`,
        icon: Libraryicon,
        component: Libraries
      }
    ];
  }

  handelclick = () => {
    this.setState(prevProps => {
      return {
        open: !prevProps.open
      };
    });
  };

  render() {
    // const currentPath = this.props.match.path;
    return (
      <DashboardGrid>
        <DashboardMain>
          {this.routes.map(route => (
            <Route
              key={route.name}
              component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </DashboardMain>
        <DashboardSidebar isopen={this.state.open}>
          <DashboardSidebar.Sidebarlogo onClick={this.handelclick} />

          {this.routes.map(route => (
            <DashboardSidebar.SibebarLink
              key={route.name}
              text={route.name}
              exact={route.exact}
              to={route.path}
              icon={route.icon}
            />
          ))}

          {/* *****  روش بدونه constractor  ******** */}
          {/* <DashboardSidebar.SibebarLink
            text="Home"
            exact={true}
            to={`${currentPath}/`}
            icon={Homeicon}
          />
          <DashboardSidebar.SibebarLink
            text="Search"
            to={`${currentPath}/search`}
            icon={Searchicon}
          />
          <DashboardSidebar.SibebarLink
            text="Library"
            to={`${currentPath}/library`}
            icon={Libraryicon}
          /> */}
        </DashboardSidebar>
        {/* *****  روش دوم *** */}
        {/* <Sidebar
          currentPath={currentPath}
          open={this.state.open}
          toggleSidebar={this.handelclick}
        /> */}
        {/* ***** روش اول **** */}
        {/* <DashboardSidebar isopen={this.state.open} onClick={this.handelclick}>
          <Sidebarlogo />
          <SidebarItem to={`${currentPath}/home`}>
            <SibebarIcon as={Homeicon} />
            {this.state.open ? <SidebarText>Home</SidebarText> : null}
          </SidebarItem>
          <SidebarItem to={`${currentPath}/search`}>
            <SibebarIcon as={Searchicon} />
            {this.state.open ? <SidebarText>Search</SidebarText> : null}
          </SidebarItem>
          <SidebarItem to={`${currentPath}/library`}>
            <SibebarIcon as={Libraryicon} />
            {this.state.open ? <SidebarText>Library</SidebarText> : null}
          </SidebarItem>
          <Link onClick={e => e.stopPropagation()} to={`${currentPath}/hello`}>
            Hello
          </Link>
        </DashboardSidebar> */}
        <DashboardPlayer />
      </DashboardGrid>
    );
  }
}
export default Dashboard;
