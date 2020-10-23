import {
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
  GET_TECHS,
  DELETE_TECH,
} from "./types"

// GET TECHS FROM SERVER
export const getTechs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/techs")
    const data = await res.json()
    dispatch({
      type: GET_TECHS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    })
  }
}
// ADD TECH TO SERVER
export const addTechs = (tech) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "Application/json",
      },
    })
    const data = await res.json()
    dispatch({
      type: ADD_TECH,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message,
    })
  }
}

// SET LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
