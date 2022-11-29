import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import HousingSheet from "./Pages/HousingSheet";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Test from "./Pages/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housingsheet/:housing" element={<HousingSheet />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test/:housingId" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
