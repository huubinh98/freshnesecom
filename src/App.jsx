import DropdownMenu from "./components/dropdownmenu";
import Footer from "./components/footer";
import Header from "./components/header";

import "./assets/css/style.scss";
import HomePage from "./pages/homepage";
import Button from "./components/button";
import IconArowBtn from "./components/icon";

function App() {
  return (
    <>
      <Header />
      <DropdownMenu />
      <Button type="icon-right" icon={<IconArowBtn />}>Buy now</Button>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
