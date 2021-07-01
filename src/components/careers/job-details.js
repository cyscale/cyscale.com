import React from "react";
import Description from "./description";
import Apply from "./apply-form";

const Details = ({ data }) => {
  return (
    <div>
      <Description data={data} />
      <Apply data={data} />
    </div>
  );
};

export default Details;
