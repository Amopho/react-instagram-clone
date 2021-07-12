import React from "react";
import Photo from "./Photo";

const PhotoList = ({ data }) => {
  const items = data.map((item, i) => <Photo key={i} info={item} />);

  return (
    <React.Fragment>
      <ul> {items} </ul>
    </React.Fragment>
  );
};

export default PhotoList;
