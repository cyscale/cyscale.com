import React from "react";
import Description from "./description";
import Apply from "./apply-form";

const Details = ({data}) => {
  return (
    <div>
      <Description data={data} />
      <Apply />
    </div>
  );
};

export default Details;
