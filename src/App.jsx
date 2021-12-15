import DropdownMenu from "./components/DropdownMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./assets/css/style.scss";
import HomePage from "./pages/Homepage";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <Header />
      <DropdownMenu />
      <HomePage />
      <Tabs />
      <Footer />
    </>
  );
}

export default App;
