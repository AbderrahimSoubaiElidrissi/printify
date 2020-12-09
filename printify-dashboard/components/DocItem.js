import { useState, useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import Link from "next/link";
import { updateDoc } from "../queries/documentQueries";
import { useMutation } from "react-query";
import PropTypes from "prop-types";
const DocItem = ({ doc }) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [mutate, { error }] = useMutation(updateDoc);
  if (error !== null) {
    setAlert(error, "danger");
  }
  const [showModal, setShowModal] = useState(false);

  const [currentDoc, setDoc] = useState(doc);
  const handleChange = (e) => {
    setDoc({ ...currentDoc, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const printDate = new Date();
    currentDoc.printHistory.push({ printDate: printDate });
    const data = await mutate(currentDoc);
    console.log(data);
    setShowModal(false);
  };
  const { _id, firstName, filename, pagesNumber } = doc;

  return (
    <tr className=" ">
      <td className=" py-4 ">John Doe</td>
      <td>{filename}</td>

      <td>{pagesNumber}</td>
      <td>
        <>
          <button
            className="rounded bg-indigo-500 text-white w-24 py-1 text-sm  uppercase font-medium tracking-wide outline-none"
            style={{ transition: "all .15s ease" }}
            onClick={() => setShowModal(true)}
          >
            print
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6  max-w-lg w-full">
                  {/*Content*/}
                  <div className="bDoc-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 bDoc-b bDoc-solid bDoc-gray-300 rounded-t">
                      <div className="text-left">
                        <h3 className=" text-xl font-semibold uppercase mb-4">
                          Printing Options
                        </h3>
                        <h5 className="text-sm color-gray-500 ">
                          {doc.filename}
                        </h5>
                      </div>

                      <button
                        className="p-1 ml-auto bg-transparent bDoc-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className=" p-6 flex-auto ">
                      <form onSubmit={handleSubmit}>
                        <div className=" w-full mb-3 flex flex-col ">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2 text-left"
                            for="copies"
                          >
                            Number of Copies
                          </label>
                          <input
                            type="number"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline "
                            placeholder={currentDoc.printConfig.copies}
                            value={currentDoc.printConfig.copies}
                            onChange={handleChange}
                            name="printConfig.copies"
                          />
                        </div>

                        <div className=" w-full mb-3 flex flex-col ">
                          <label
                            for="layout"
                            className="block text-left uppercase text-gray-700 text-xs font-bold mb-2"
                          >
                            Layout
                          </label>
                          <select
                            name="printConfig.layout"
                            value={currentDoc.printConfig.layout}
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full  "
                            onChange={handleChange}
                          >
                            <option value="portrait">Portrait</option>
                            <option value="paysage">Paysage</option>
                          </select>
                        </div>
                        <div class=" w-full mb-3 flex flex-col ">
                          <label
                            for="color"
                            className="block text-left uppercase text-gray-700 text-xs font-bold mb-2"
                          >
                            Color
                          </label>
                          <select
                            name="printConfig.color"
                            value={currentDoc.printConfig.color}
                            onChange={handleChange}
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          >
                            <option value="black">Black</option>
                            <option value="color">Color</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-end   rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Print
                          </button>
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      </td>
      <td>
        {doc.printHistory.length ? (
          <Link href={`/queue/${filename}?id=${_id}`} className="w-24">
            <a className="rounded bg-green-500 text-white  py-1 px-6 uppercase font-medium  text-sm  tracking-wide outline-none">
              Show
            </a>
          </Link>
        ) : (
          <button className="rounded bg-gray-500 text-white px-6 py-1 uppercase text-sm  font-medium tracking-wide outline-none cursor-not-allowed">
            Show
          </button>
        )}
      </td>
    </tr>
  );
};

DocItem.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default DocItem;
