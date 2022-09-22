import { FC, useCallback, useState } from 'react';
import { useDebounce } from 'use-debounce'

import { MemoStateRender, StateRenderer } from './StateRender';
import { Incrementor } from './StateEditor';
import { getRandomHexColor } from './getRandomColor';

const INITIAL_COUNTS = [0, 1, 2, 3, 4];

const INITIAL_INCREMENTOR_IDX: number = 0;

export const StateContainer: FC = () => {
  const [counts, setCounts] = useState(INITIAL_COUNTS);
  const [incrementorIdx, setIncrementorIdx] = useState(INITIAL_INCREMENTOR_IDX);

  const [d_counts] = useDebounce(counts, 1000);

  const incrementState = () => {
    setCounts(counts.map((count, idx) => incrementorIdx === idx ? count + 1 : count))
  }

  const handleSelectCounter = useCallback((idx: number) => setIncrementorIdx(idx), []);
  return (
    <div className="container flex flex-row gap border-thick" style={{
      borderColor: getRandomHexColor(),
    }}>
      <MemoStateRender counts={d_counts} title="With React.memo" selectedCounter={incrementorIdx} onSelectCounter={handleSelectCounter} />
      <StateRenderer counts={d_counts} title="No React.memo" selectedCounter={incrementorIdx}  onSelectCounter={handleSelectCounter} />
      <Incrementor count={counts[incrementorIdx]} handleIncrement={incrementState} />
    </div>
  )
}
