import React from "react";
function Button({ increment, children }) {
  console.log(`Button component rendering`);
  return (
    <p>
      <button type="button" onClick={increment}>
        {children}
      </button>
    </p>
  );
}

export default React.memo(Button);
