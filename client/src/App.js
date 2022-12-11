import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FormPage from "./pages/FormPage"
import Preview from "./pages/Preview"
import Success from "./pages/Success"
import Failed from "./pages/Failed"
import ThankYou from "./pages/ThankYou"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/form" element={<FormPage />}></Route>
        <Route exact path="/preview" element={<Preview />}></Route>
        <Route exact path="/success" element={<Success />}></Route>
        <Route exact path="/failed" element={<Failed />}></Route>
        <Route exact path="/thank-you" element={<ThankYou />}></Route>
      </Routes>
    </>
  );
}

export default App;
