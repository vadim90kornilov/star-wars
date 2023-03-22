import "./scss/app.scss";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
