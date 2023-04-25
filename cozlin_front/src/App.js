import './styles/common/reset.css'
import Header from "./components/pages/Layout/Header";
import {Outlet} from "react-router-dom";


function App() {
  return (
      <div id='wrap'>
        <main>
          <Header />
          <Outlet />
        </main>
      </div>

  );
}

export default App;
