import React, { useState } from "react";
import FB from "./MediaTemplates/FB.jsx";

const SelectListFB = () => {
  const components = [
    "Component 1",
    "Component 2",
    "Component 3",
    "Component 4",
  ];
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex flex-row ">
      {components.map((component, index) => (
        <div
          onClick={() => handleComponentClick(component)}
          key={index}
          className={`mr-10 p-4 bg-slate-200 rounded-lg ${
            selectedComponent === component
              ? "border-solid border-4 border-purple-800"
              : "border-dashed border-2 border-slate-400"
          }`}
        >
          <FB />
        </div>
      ))}
    </div>
  );
};

export default SelectListFB;
