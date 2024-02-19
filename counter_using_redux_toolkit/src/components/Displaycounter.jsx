import { useSelector } from "react-redux";

const Displaycounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">counter current value: {counterVal} </p>;
};
export default Displaycounter;
