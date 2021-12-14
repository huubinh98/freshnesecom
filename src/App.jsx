import DropdownMenu from "./components/dropdownmenu";
import Footer from "./components/footer";
import Header from "./components/header";

import "./assets/css/style.scss";
import HomePage from "./pages/homepage/HomePage";
import Button from "./components/button";
function App() {
  return (
    <>
      <Header />
      <DropdownMenu />
      <Button size='medium' color='stroke'>
        Buy Now
      </Button>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
