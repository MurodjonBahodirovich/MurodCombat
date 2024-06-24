import "./Reset.css";

const Reset = ({ dispatch }) => {
  const handleReset = () => {
    dispatch(0);
    localStorage.removeItem("count");
  };

  return (
    <>
      <div className="reset-btn" onClick={handleReset}>
        Reset!
      </div>
    </>
  );
};

export default Reset;
