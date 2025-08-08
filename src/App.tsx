import Menu from "./components/Menu/Menu";
import LogIn from "./components/LogIn/LogIn/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu></Menu>}></Route>
          <Route path="/log-in" element={<LogIn></LogIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
