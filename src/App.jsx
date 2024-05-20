import FooterComponent from "./components/ui/Footer.component";
import NAVBARComponent from "./components/ui/Navbar.component";
import { Route ,Routes } from "react-router-dom" ;
import Homepage from "./pages/Home.pages";
import FAQpage from "./pages/FAQ.pages" ;
import About from "./pages/About.pages";
import Contact from "./pages/Contact.pages";
import CoinPage from "./pages/Coin.page";
function App() {
  return (
    <div>
        {/*NAVBAR*/}
          <NAVBARComponent/>

        {/*wrapper*/}
          <div className="wrapper">

            <Routes>
              <Route  path="/" element={<Homepage/>}/>
              <Route  path="/coin/:id" element={<CoinPage/>}/>
              <Route path="/faq" element={<FAQpage/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
   
          </div>

        {/*FOOTER*/}
          <FooterComponent/>



    </div>
  );
};

export default App;