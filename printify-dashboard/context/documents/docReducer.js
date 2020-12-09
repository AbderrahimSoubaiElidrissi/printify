import {
  
  FILTER_DOCS,
  CLEAR_FILTER,
} from "../types";

const docReducer = (state, action) => {
  switch (action.type) {
    case FILTER_DOCS:
      return {
        ...state,
        filtered: state.docs.filter((doc) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return  doc.filename.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    
    default:
      return state;
  }
};
export default docReducer;
