import { FC, useState } from 'react';
import { useDebounce } from 'use-debounce'

import { MemoStateRender, StateRenderer } from './StateRender';
import { EditState } from './StateEditor';
import { getRandomHexColor } from './getRandomColor';

const INITIAL_STATE = {
  count: 0,
};

export const StateContainer: FC = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const [d_state] = useDebounce(state, 1000);

  const incrementState = () => {
    setState({ count: state.count + 1 })
  }
  return (
    <div className="container flex flex-row gap border-thick" style={{
      borderColor: getRandomHexColor(),
    }}>
      <MemoStateRender count={d_state.count} title="With React.memo" />
      <StateRenderer count={d_state.count} title="No React.memo" />
      <EditState state={state} handleUpdateState={incrementState} />
    </div>
  )
}
