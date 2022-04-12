import counterReducer, {
  CounterState,
  
} from './counterSlice';

describe('counter reducer', () => {
  const initialState: CounterState = {
    auth: false,
    name: '',
    email: ''
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });
});
