import "./Body.css";

const Body = ({ count, dispatch }) => {
  const handleClick = () => {
    dispatch(count + 10);
  };

  return (
    <>
      <div className="circle_container" onClick={handleClick}>
        <p>+10</p>

        <div></div>
      </div>
    </>
  );
};

export default Body;
