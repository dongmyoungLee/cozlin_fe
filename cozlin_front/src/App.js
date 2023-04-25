import './styles/common/reset.css'
import Header from "./components/pages/Layout/Header";
import {Outlet} from "react-router-dom";
import {Mobile, PC} from "./components/config/Responsive";
import MobileHeader from "./components/pages/Layout/MobileHeader";


function App() {


  return (
      <div id='wrap'>
        <main>
          <PC>
            <Header />
          </PC>
          <Mobile>
            <MobileHeader />
          </Mobile>
          <Outlet />
        </main>
      </div>

  );
}

export default App;
