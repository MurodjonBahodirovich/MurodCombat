import "./Header.css";

const Header = ({ count }) => {
  return (
    <>
      <div className="header">
        <p>To'plangan bal:</p>
        <h1>{count}</h1>
      </div>
    </>
  );
};

export default Header;
