import { Toaster } from "react-hot-toast";
import { Auth } from "./components/Auth";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Auth />
      <Toaster/>
    </>
  );
}

export default App;
