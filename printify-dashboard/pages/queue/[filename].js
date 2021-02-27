import { useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function Document() {
  let currentDoc = null;
  useEffect(() => {
    async function getDocument() {
      return await axios.get("/api/v1/documents");
    }
    currentDoc = getDocument();
  }, []);

  console.log(currentDoc);
  return (
    <Layout>
      <section className="container p-4">
        <h1>hhhhhhhhhh{currentDoc}</h1>
        <table className="w-full p-2 text-gray-700 text-center">
          <thead>
            <tr className="text-indigo-600 h-10 ">
              <th>Document</th>
              <th>Printing Date</th>
            </tr>
          </thead>
          <tbody className="bg-white my-2"></tbody>
        </table>
      </section>
    </Layout>
  );
}
