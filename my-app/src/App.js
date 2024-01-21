import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectPage from "./pages/SelectPage";

function App() {
  return (
    <div className="h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/step1" element={<FormStep1 />} />
          <Route path="/step2" element={<FormStep2 />} />
          <Route path="/select" element={<SelectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
