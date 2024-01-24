import { SideBar } from "./components/SideBar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <SideBar />
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: "600",
          style: {
            background: "#fc3d21",
            color: "black",
            width: "600px",
            fontSize: "18px",
            fontWeight: "750",
          },
        }}
      />
    </>
  );
}

export default App;
