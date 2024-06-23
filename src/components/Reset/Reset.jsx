import "./Reset.css";

const Reset = ({ dispatch }) => {
  return (
    <>
      <div className="reset-btn" onClick={() => dispatch(0)}>
        Reset!
      </div>
    </>
  );
};

export default Reset;
