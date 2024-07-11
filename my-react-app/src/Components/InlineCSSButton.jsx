import React from "react";

const InlineCSSButton = () => {
  const styles = {
    backgroundColor: "hsl(200,100%,50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <button style={styles}>Inline CSS</button>
    </>
  );
};

export default InlineCSSButton;
