import "./App.css";
import Navbar from "./Navigation";
import Hr from "./Hr";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hr />
      <Main className="main" />
      <Footer />
    </div>
  );
}

export default App;
