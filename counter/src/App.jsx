import "./App.css";
import Displaycounter from "./components/Displaycounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Model from "./components/Model";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Model>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacy /> : <Displaycounter />}
            <Controls />
          </div>
        </Model>
      </div>
    </>
  );
}

export default App;
