import {
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
  SET_CURRENT,
  GET_TECHS,
  DELETE_TECH,
  UPDATE_TECH,
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
export const setCurrent = (tech) => {
  return {
    type: SET_CURRENT,
    payload: tech,
  }
}
// UPDATE TECH
export const updateTech = (tech) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch(`/techs/${tech.id}`, {
      method: "PUT",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application.json",
      },
    })
    const data = await res.json()
    dispatch({
      type: UPDATE_TECH,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message,
    })
  }
}
// DELETE TECH
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch(`/techs/${id}`, {
      method: "DELETE",
    })
    dispatch({
      type: DELETE_TECH,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// SET LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
