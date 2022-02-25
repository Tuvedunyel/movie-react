import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Browse from "./components/Browse";
import Favoris from "./components/Favoris";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./Home";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Films' element={<Movies />} />
          <Route path='/Liste' element={<Favoris />} />
          <Route path='/Rechercher' element={<Browse />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
