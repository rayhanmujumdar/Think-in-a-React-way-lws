import React from "react";

function ShowCount({ count, title }) {
  console.log(`${title} component rendering`);
  return (
    <p>
      {title} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
