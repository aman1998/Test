import {SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_IN_FAILED} from '../actionTypes'

const initialState = {
  post: {
    loading: false,
    success: false,
    failed: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case SIGN_IN_FAILED:
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