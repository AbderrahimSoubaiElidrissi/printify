import React, { useReducer } from "react";
import docContext from "./docContext";
import docReducer from "./docReducer";
import {
  FILTER_DOCS,
  CLEAR_FILTER,
} from "../types";
const DocState = (props) => {
  const initialState = {
    loading: true,
    filtered: null,
    docs: [],
  };
  const [state, dispatch] = useReducer(docReducer, initialState);
 
  
  //Clear docs
  const clearDocs = () => {
    dispatch({ type: CLEAR_DOCS });
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
        filterDocs,
        clearFilter,
       
      }}
    >
      {props.children}
    </docContext.Provider>
  );
};
export default DocState;
