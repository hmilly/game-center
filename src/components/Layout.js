import * as React from "react";
import SideNav from "./SideNav";
import { Main } from "../styles/Main.styled";

const Layout = ({ children }) => {
  return (
    <Main>
      <SideNav />
      {children}
    </Main>
  );
};

export default Layout;
