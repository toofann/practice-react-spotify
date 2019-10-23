import React from "react";
import { ReactComponent as SidebarSvg } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const sidebarOpenClassName = "sidebar-open";
const sidebarCloseClassName = "sidebar-closed";
let DashboardSidebar = styled.div.attrs(props => {
  return {
    className: props.isOpen ? sidebarOpenClassName : sidebarCloseClassName
  };
})`
  width: ${props => (props.isOpen ? "25%" : "16%")};
  height: 100%;
  background-color: #00ffff;
  transition: width 0.4s ease-in-out;
  position: absolute;
  top: 0px;
`;

let SidebarLogo = styled(SidebarSvg)`
  color: black;
  margin: 15px 5px;
`;

const activeClassName = "Active";
let SidebarItem = styled(NavLink).attrs(props => {
  return {
    onClick: event => event.stopPropagation(),
    activeClassName: activeClassName
  };
})`
  width: 100%;
  height: 40px;
  color: black;
  display: block;
  text-decoration: none;
  padding-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  &:hover {
    background-color: #24dbd7;
  }
  &.${activeClassName + "::before"} {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: white;
  }
`;

const SidebarText = styled.span`
  ${DashboardSidebar}.${sidebarOpenClassName} & {
    display: inline-block
  }
  ${DashboardSidebar}.${sidebarCloseClassName} & {
    display: none;
  }
`;
let DashboaredItemIcon = styled.img`
  color: black;
  vertical-align: -5px;
`;

// let Sidebar = ({ isOpen, dashPath, ToggleSidebar }) => {
//   return (
//     <DashboardSidebar isOpen={isOpen} onClick={ToggleSidebar}>
//       <SidebarLogo />
//       <SidebarItem to={`${dashPath}/home`}>
//         <DashboaredItemIcon as={homeSvg} />
//         {isOpen ? "Home" : null}
//       </SidebarItem>
//       <SidebarItem to={`${dashPath}/search`}>
//         <DashboaredItemIcon as={searchSvg} />
//         {isOpen ? "Search" : null}
//       </SidebarItem>
//       <SidebarItem to={`${dashPath}/liberares`}>
//         <DashboaredItemIcon as={liberaresSvg} />
//         {isOpen ? "Librares" : null}
//       </SidebarItem>
//     </DashboardSidebar>
//   );
// };
// export default Sidebar;

DashboardSidebar.SidebarLogo = SidebarLogo;
DashboardSidebar.SidebarItem = ({ to, exact, text, icon }) => {
  return (
    <SidebarItem to={to} exact={exact}>
      <DashboaredItemIcon as={icon} />
      <SidebarText>{text}</SidebarText>
    </SidebarItem>
  );
};

export default DashboardSidebar;
