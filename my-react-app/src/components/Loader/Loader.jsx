import React from "react";
import "./Loader.scss";
import ContentLoader from "./LoaderPart/ContentLoader";

const Loader = () => {
  const arrayLoader = [...Array(3).keys()];
  return (
    <>
      {arrayLoader.map((item) => (
        <ContentLoader key={item} />
      ))}
    </>
  );
};

export default Loader;
