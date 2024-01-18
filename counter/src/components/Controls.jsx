import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const invalue = useRef();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddition = () => {
    const num = invalue.current.value;
    dispatch({ type: "ADDITION", payload: { num: num } });
    invalue.current.value = " ";
  };
  const handleSubtraction = () => {
    const num = invalue.current.value;
    dispatch({ type: "SUBTRACTION", payload: { num: num } });
    invalue.current.value = " ";
  };
  const handleprivacy = () => {
    dispatch({ type: "PRIVACY" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}>
          +1
        </button>
        {/* <button type="button" className="btn btn-secondary">
        Secondary
      </button>
       */}

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}>
          -1
        </button>
        {/* 
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button> */}
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleprivacy}>
          private data
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center second-div">
        <input
          type="text"
          placeholder="enter number"
          className="number-input"
          ref={invalue}
        />

        {/* <button type="button" className="btn btn-secondary">
        Secondary
      </button>
       */}

        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddition}>
          add
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={handleSubtraction}>
          sub
        </button>
        {/* <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button> */}
      </div>
    </>
  );
};
export default Controls;
