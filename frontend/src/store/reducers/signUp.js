import {SIGN_UP_SUCCESS, SIGN_UP_LOADING, SIGN_UP_FAILED} from '../actionTypes'

const initialState = {
  post: {
    loading: false,
    success: false,
    failed: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case SIGN_UP_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    default: return state
  }
}

export default reducer