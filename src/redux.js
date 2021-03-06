const GET_MINES = 'GET_MINES';
const GET_MINES_SUCCESS = 'GET_MINES_SUCCESS';
const GET_MINES_FAIL = 'GET_MINES_FAIL';

const CLEAR_MINES = 'CLEAR_MINES';
const CLEAR_MINES_SUCCESS = 'CLEAR_MINES_SUCCESS';

const initialState = {
  loading: false,
  success: false,
  error: '',
  mineList: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MINES:
      return { ...state, loading: true };
    case GET_MINES_SUCCESS:
      return { ...state, loading: false, mineList : action.data };
    case GET_MINES_FAIL:
      return { ...state, loading: false, error: action.msg };
    case CLEAR_MINES:
      return { ...state, loading: true };
      case CLEAR_MINES_SUCCESS:
      return { ...state, loading: false, mineList : action.data };
    default:
      return state;
  }
}