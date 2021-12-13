import DropdownMenu from "./components/dropdownmenu";
import Footer from "./components/footer";
import Header from "./components/header";

import "./assets/css/style.scss";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <>
      <Header />
      <DropdownMenu />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
