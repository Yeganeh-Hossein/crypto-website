import FooterComponent from "./components/ui/Footer.component";
import NAVBARComponent from "./components/ui/Navbar.component";

function App() {
  return (
    <div>
        {/*NAVBAR*/}
          <NAVBARComponent/>

        {/*wrapper*/}
          <div className="wrapper">
            <h2>wrapper</h2>
          </div>

        {/*FOOTER*/}
          <FooterComponent/>



    </div>
  );
};

export default App;
