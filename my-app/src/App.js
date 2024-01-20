import React from 'react';
import LandingPage from "./pages/LandingPage";
import FB from "./components/MediaTemplates/FB";
import Insta from "./components/MediaTemplates/Insta";
import LinkedIn from "./components/MediaTemplates/LinkedIn";
import X from "./components/MediaTemplates/X";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // <div className="flex flex-col items-center">
    //   {/* Facebook Posts */}
    //   <div className="flex flex-col space-y-4 mb-40">
    //     <div className="h-24 w-100">
    //       <FB />
    //     </div>
    //   </div>

    //   {/* Instagram Posts */}
    //   <div className="flex flex-col space-y-4 mb-50">
    //     <div className="h-150 w-100">
    //       <Insta />
    //     </div>
    //   </div>

    //   {/* LinkedIn Posts */}
    //   <div className="flex flex-col space-y-4 mb-50">
    //     <div className="h-30 w-100">
    //       <LinkedIn />
    //     </div>
    //   </div>

    //   {/* X Posts */}
    //   <div className="flex flex-col space-y-4 mt-10">
    //     <div className="h-24 w-100">
    //       <X />
    //     </div> 
    //   </div>
    // </div>
    <LoginPage />
  );
}

export default App;
