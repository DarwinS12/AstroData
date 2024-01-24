import { Content } from "./Content";
import { SideMenu } from "./SideMenu";
import { Header } from "./Header";
import { useState } from "react";

export function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="content-wrapper">
          <SideMenu collapsed={collapsed} />
          <Content />
        </div>
      </div>
    </>
  );
}
