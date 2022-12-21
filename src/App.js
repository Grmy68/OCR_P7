import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
