import React from "react";

const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <p>loading please wait ...</p>
      ) : error ? (
        <p>{error} ...</p>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
