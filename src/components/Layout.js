import * as React from "react";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
    return (
        <div>
            <SideNav />
            {children}
        </div>
    )
}

export default Layout