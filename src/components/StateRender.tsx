import { FC, memo } from "react";
import { getRandomHexColor } from "./getRandomColor";

interface StateRendererProps {
  counts: number[];
  title: string;
  selectedCounter: number;
  onSelectCounter: (idx: number) => void;
}

export const StateRenderer: FC<StateRendererProps> = ({ counts, title, selectedCounter, onSelectCounter }) => {
  const color = getRandomHexColor();

  return <div className="container border flex flex-col gap" style={{
    borderColor: color,
  }}>
    <div className="flex flex-row">
      {counts.map((count, idx) => (<div
        key={`${count}_${idx}`}
        className="container pointer counter hover"
        style={selectedCounter === idx ? {
          background: color,
        } : {}}
        onClick={() => onSelectCounter(idx)}
      >
        <p>{count}</p>
      </div>)
      )}
    </div>
    <h5>{title}</h5>
  </div>
}

export const MemoStateRender = memo(StateRenderer);