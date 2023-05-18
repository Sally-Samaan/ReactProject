import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage";
import FavoritePage from "./Pages/FavoritePage";
import { FavProvider } from "./Context/FavContext";

function App() {
  return (
    <Router>
      <div className="App">
        <FavProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/event/:id" element={<EventPage />} />
          </Routes>
        </FavProvider>
      </div>
    </Router>
  );
}

export default App;
