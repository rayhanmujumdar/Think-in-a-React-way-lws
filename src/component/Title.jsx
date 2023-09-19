import React from "react";
function Title() {
  console.log(`Title component rendering`);
  return <h1>useCallback Hook Tutorial</h1>;
}
export default React.memo(Title);
