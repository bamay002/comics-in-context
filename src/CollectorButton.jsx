import React, { useContext } from "react";
import StyleContext from "./components/StyleContext";


export default function CollectorButton() {
  const buttonStyling = React.useContext(StyleContext)
  
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}
