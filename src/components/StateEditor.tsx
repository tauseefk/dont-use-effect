import { FC } from "react";
import { getRandomHexColor } from "./getRandomColor";

interface IncrementorProps { count: number, handleIncrement: () => void }

export const Incrementor: FC<IncrementorProps> = ({ count, handleIncrement }) => {
  return <div
    className="container flex flex-col justify-around pointer-cursor counter" style={{
      borderColor: getRandomHexColor(),
    }}>
    <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button>
  </div>
}