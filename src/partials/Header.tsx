import * as React from "react";

type HeaderProps = {
  image: any;
};

const Header: React.FC<HeaderProps> = ({ image }) => {
  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: "1rem",
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "transparent",
    width: "100%",
    zIndex: 1,
    fontFamily: "sans-serif",
  };

  const logoStyle: React.CSSProperties = {
    width: "150px",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginLeft: "2rem",
    marginTop: "0.5rem",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "1rem 1rem",
    backgroundColor: "#5D5DFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "2rem",
    marginTop: "0.5rem",
  };

  return (
    <header style={headerStyle}>
      <img src={image} alt="Company Logo" style={logoStyle} />
      <button style={buttonStyle}>Contact Now</button>
    </header>
  );
};

export default Header;
