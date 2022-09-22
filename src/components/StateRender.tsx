import { FC, memo } from "react";
import { getRandomHexColor } from "./getRandomColor";

interface StateRendererProps { count: number, title: string }
export const StateRenderer: FC<StateRendererProps> = ({ count, title }) => {
  return <div className="container border" style={{
    borderColor: getRandomHexColor(),
  }}>
    <p>{count}</p>
    <h5>{title}</h5>
  </div>
}

export const MemoStateRender = memo(({ count, title }: { count: number, title: string }) => <StateRenderer count={count} title={title} />);