import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main />

        <Footer />
      </div>
    </div>
  );
}

export default App;
