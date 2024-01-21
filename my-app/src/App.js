import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectPage from "./pages/SelectPage";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchResult = (result) => {
    setSearchResult(result);
    console.log("IMAGES: " + searchResult);
  };
  
  return (
    <div className="h-screen w-full">
      <div className="absolute w-full flex flex-row justify-end">
        <div
          href="/dashboard"
          className="bg-slate-200 px-4 py-2  mx-6 my-4 rounded-full bg-opacity-70 hover:bg-opacity-100 text-xl"
        >
          Dashboard
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/step1"
            element={<FormStep1 setSearchResult={handleSearchResult} />}
          />
          <Route path="/step2" element={<FormStep2 />} />
          <Route path="/select" element={<SelectPage passimages={searchResult} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
