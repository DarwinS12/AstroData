import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import {
  GiMarsCuriosity,
  GiAsteroid,
  GiBaseDome,
  GiKnockedOutStars,
} from "react-icons/gi";
import Sider from "antd/es/layout/Sider";

export function SideMenu({ collapsed }) {
  const navigate = useNavigate();

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="menu"
          mode="inline"
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              label: "Home",
              key: "/",
              icon: <GiBaseDome size={30} color="#fc3d21" />,
            },
            {
              label: "Astronomy Picture",
              key: "astronomyPicture",
              icon: <BsImage size={20} color="#fc3d21" />,
            },
            {
              label: "Mars Rover Photos",
              key: "roverPhotos",
              icon: <GiMarsCuriosity size={25} color="#fc3d21" />,
            },
            {
              label: "Asteroid's ID reference",
              key: "asteroidsId",
              icon: <GiKnockedOutStars size={25} color="#fc3d21"/>
            },
            {
              label: "Asteroid Information",
              key: "asteroidInfo",
              icon: <GiAsteroid size={25} color="#fc3d21" />,
            },
          ]}
        ></Menu>
      </Sider>
    </>
  );
}
