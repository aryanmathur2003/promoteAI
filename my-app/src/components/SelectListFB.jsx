import React, { useState } from "react";
import FB from "./MediaTemplates/FB.jsx";

const SelectListFB = (props) => {
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
      {imageSrc.map((image, index) => (
        <div
          onClick={() => handleComponentClick(components[index])}
          key={index}
          className={`mr-10 p-4 bg-slate-200 rounded-lg ${
            selectedComponent === components[index]
              ? "border-solid border-4 border-purple-800"
              : "border-dashed border-2 border-slate-400"
          }`}
        >
          <FB
            profilePicture={profilePicture}
            username={username}
            imageSrc={image}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectListFB;
