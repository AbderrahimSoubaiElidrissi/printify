import {
  GET_DOCS,
  UPDATE_DOC,
  FILTER_DOCS,
  CLEAR_FILTER,
  DOC_ERROR,
} from "../types";

const docReducer = (state, action) => {
  switch (action.type) {
    case GET_DOCS:
      return {
        ...state,
        docs: action.payload,
        loading: false,
      };

    case UPDATE_DOC:
      return {
        ...state,
        docs: state.docs.map((doc) =>
          doc._id === action.payload._id ? action.payload : doc
        ),
        loading: false,
      };

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
    case DOC_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default docReducer;
