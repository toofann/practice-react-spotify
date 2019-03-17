import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Spotifylogo } from "../assets/Spotifylogo.svg";
import { ReactComponent as Searchicon } from "../assets/Searchicon.svg";
import { ReactComponent as Homeicon } from "../assets/Homeicon.svg";
import { ReactComponent as Libraryicon } from "../assets/Libraryicon.svg";

const sidebarOpenClassName = "sidebar-open";
const sidebarCloseClassName = "sidebar-close";
const activeClassName = "Active";
const DashboardSidebar = styled.div.attrs(props => {
  return {
    className: props.isopen ? sidebarOpenClassName : sidebarCloseClassName
  };
})`
  grid-area: sidebar;
  background-color: black;
  transition: width 0.4s ease-out;
  width: ${props => (props.isopen ? "200px" : "100px")};
`;
const Sidebarlogo = styled(Spotifylogo)`
  color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  &:hover {
    background-color: #131118;
    cursor: pointer;
  }
`;
const SidebarItem = styled(NavLink).attrs(props => {
  return {
    activeClassName: activeClassName,
    onClick: e => e.stopPropagation()
  };
})`
  position: relative;
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  font-size: 20px;
  color: white;
  &.${activeClassName + "::before"} {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: green;
  }
  /* &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: green;
    display: none;
  }
  &.${activeClassName + "::before"} {
    display: block;
  } */
  &:hover {
    background-color: #131118;
    cursor: pointer;
  }
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;
const SibebarIcon = styled.img`
  width: 1.75em;
  height: 1.75em;
  position: relative;
  top: -0.125em;
  display: inline-block;
  vertical-align: middle;
  ${DashboardSidebar}.${sidebarOpenClassName} &{
    margin-left:15px;
  }
  ${DashboardSidebar}.${sidebarCloseClassName} &{
    margin-left:0px;
  }
`;
const SidebarText = styled.span`
  flex: 1;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  ${DashboardSidebar}.${sidebarOpenClassName} &{
    display:block;
  }
  ${DashboardSidebar}.${sidebarCloseClassName} &{
    display:none;
  }
`;
//************  روش دوم ********** */
// const Sidebar = ({ currentPath, open, toggleSidebar }) => (
//   <DashboardSidebar isopen={open} onClick={toggleSidebar}>
//     <Sidebarlogo />
//     <SidebarItem to={`${currentPath}/home`}>
//       <SibebarIcon as={Homeicon} />
//       <SidebarText>Home</SidebarText>
//     </SidebarItem>
//     <SidebarItem to={`${currentPath}/search`}>
//       <SibebarIcon as={Searchicon} />
//       <SidebarText>Search</SidebarText>
//     </SidebarItem>
//     <SidebarItem to={`${currentPath}/library`}>
//       <SibebarIcon as={Libraryicon} />
//       <SidebarText>Library</SidebarText>
//     </SidebarItem>
//   </DashboardSidebar>
// );
// export default Sidebar;

DashboardSidebar.Sidebarlogo = props => <Sidebarlogo {...props} />;
DashboardSidebar.SibebarLink = ({ to, exact, icon, text }) => (
  <SidebarItem to={to} exact={exact}>
    <SibebarIcon as={icon} />
    <SidebarText>{text}</SidebarText>
  </SidebarItem>
);

export default DashboardSidebar;
