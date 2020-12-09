import axios from "axios";
import { queryCache } from "react-query";

//Get all documents
const getAllDocs = async () => {
  try {
    const res = await axios.get("/api/v1/documents");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
//Update document
const updateDoc = async (doc) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`api/V1/documents/${doc._id}`, doc, config);
    return res;
  } catch (err) {
    console.log(err);
  }
};
//Prefetch Documents
const prefetchDocs = async () => {
  await queryCache.prefetchQuery("docs", getAllDocs);
};
module.exports = { getAllDocs, updateDoc,prefetchDocs};
