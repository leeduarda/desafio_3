import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import FooterQualityService from "./components/FooterQualityService";


function App() {
  return (
    <>
      <NavBar />
      <main>
      <Outlet />
      </main>
      {/* <FooterQualityService /> */}
      <Footer />
    </>
  )
}

export default App;
