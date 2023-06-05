import './styles/common/reset.css'
import Header from "./components/pages/Layout/Header";
import {Outlet} from "react-router-dom";
import {Mobile, PC, Tablet} from "./components/config/Responsive";
import MobileHeader from "./components/pages/Layout/MobileHeader";
import HeightSpace from "./components/atoms/HeightSpace";


function App() {


  return (
      <div id='wrap'>
        <main>
          <PC>
            <HeightSpace />
            <Header />
          </PC>
          <Tablet>
            <HeightSpace />
            <MobileHeader />
          </Tablet>
          <Mobile>
            <HeightSpace />
            <MobileHeader />
          </Mobile>
          <Outlet />
        </main>
      </div>

  );
}

export default App;
