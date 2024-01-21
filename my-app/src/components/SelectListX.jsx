import React, { useState } from "react";
import X from "./MediaTemplates/X.jsx";

const SelectListX = (props) => {
  const { profilePicture, username, imageSrc, description } = props;
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
          <X
            profilePicture={profilePicture}
            username={username}
            imageSrc={imageSrc}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectListX;
