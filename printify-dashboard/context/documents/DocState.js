import React, { useReducer } from "react";
import axios from "axios";
import docContext from "./docContext";
import docReducer from "./docReducer";
import {
  GET_DOCS,
  UPDATE_DOC,
  FILTER_DOCS,
  DOC_ERROR,
  CLEAR_FILTER,
} from "../types";
const DocState = (props) => {
  const initialState = {
    loading: true,
    error: null,
    filtered: null,
    docs: [],
  };
  const [state, dispatch] = useReducer(docReducer, initialState);
  //Get   docs
  const getDocs = async () => {
    try {
      const res = await axios.get("/api/v1/documents");
      dispatch({
        type: GET_DOCS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DOC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Clear docs
  const clearDocs = () => {
    dispatch({ type: CLEAR_DOCS });
  };

  //Update doc
  const updateDoc = async (doc) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`api/V1/documents/${doc._id}`, doc, config);
      dispatch({ type: UPDATE_DOC, payload: doc });
    } catch (err) {
      dispatch({
        type: DOC_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  //Filter docs
  const filterDocs = (text) => {
    dispatch({ type: FILTER_DOCS, payload: text });
  };
  return (
    <docContext.Provider
      value={{
        docs: state.docs,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        clearDocs,
        updateDoc,
        filterDocs,
        clearFilter,
        getDocs,
      }}
    >
      {props.children}
    </docContext.Provider>
  );
};
export default DocState;
