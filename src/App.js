//CSS imports
import "./App.css";
//PAGE IMPORTS
import Navbar from "./components/navbar/navbar";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import Page4 from "./components/page4/page4";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
}

export default App;
