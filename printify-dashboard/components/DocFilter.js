import { useContext, useRef, useEffect } from "react";
import DocContext from "../context/documents/docContext";

const DocFilter = () => {
  const docContext = useContext(DocContext);
  const { filterDocs, clearFilter, filtered } = docContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterDocs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-between px-6 py-2 gap-10">
        <input
          ref={text}
          type="text"
          placeholder="Search for a document ..."
          onChange={onChange}
          className="w-full p-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline "
        />
                          <select
                            name="color"
                           
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline "
                          >
                            <option value="black">All</option>
                            <option value="black">Printed</option>
                            <option value="color">Delivered</option>
                            <option value="color">Waiting for Delivery</option>
                            <option value="color">Waiting for Printing</option>
                          </select>
                          <input
                            type="date"
                           
                            className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline "
                          />
         
           </form>
    
  );
};
export default DocFilter;
