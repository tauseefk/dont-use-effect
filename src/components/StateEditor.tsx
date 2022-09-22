import { FC } from "react";
import { getRandomHexColor } from "./getRandomColor";

interface EditStateProps { state: any, handleUpdateState: () => void }

export const EditState: FC<EditStateProps> = ({ state, handleUpdateState }) => {
  return <div className="container border" style={{
    borderColor: getRandomHexColor(),
  }}>
    <p>{state.count}</p>
    <button onClick={handleUpdateState}>Update</button>
  </div>
}