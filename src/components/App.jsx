import "./app.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "./Navigation";
import Hr from "./Hr";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  
  return (
    <div className="container px-32">
      <Navbar />
      <Hr />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
