import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FormPage from "./pages/FormPage"
import Preview from "./pages/Preview"
import Success from "./pages/Success"
import background from "./assests/images/back.webp"
import ErrorPage from "./pages/ErrorPage"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div class="grandParent">
        <div class="parent">
          <div class="child1">
            <img src={background} className="bg-img"></img>
          </div>
          <div class="child2">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/form" element={<FormPage />}></Route>
              <Route exact path="/preview" element={<Preview />}></Route>
              <Route exact path="/success" element={<Success />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
}

export default App;
