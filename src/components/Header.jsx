import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { GiGalaxy } from "react-icons/gi";

export function Header({ collapsed, setCollapsed }) {

  return (
    <>
      <div className="header">
        <Button
        className="btn-menu"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined size={30} />
            ) : (
              <MenuFoldOutlined size={30} />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
        />
        <h2>Astronomy Information <GiGalaxy /></h2>
      </div>
    </>
  );
}
