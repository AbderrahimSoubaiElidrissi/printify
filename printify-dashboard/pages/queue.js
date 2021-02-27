import Layout from "../components/Layout";
import DocItem from "../components/DocItem";
import Spinner from "../components/Spinner";
import Head from "next/head";
import { useContext } from "react";
import { useQuery } from "react-query";
import DocContext from "../context/documents/docContext";
import AlertContext from "../context/alert/alertContext";

import DocFilter from "../components/DocFilter";
import { getAllDocs } from "../queries/documentQueries";
const Queue = () => {
  const docContext = useContext(DocContext);
  const { filtered } = docContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { isLoading, error, data: docs } = useQuery("docs", getAllDocs);
  if (error !== null) {
    setAlert(error, "danger");
  }

  return (
    <Layout>
      <Head>
        <title>Queue</title>
      </Head>
      <section className="container p-4">
        <DocFilter></DocFilter>
        <table className="w-full p-2 text-gray-700 text-center">
          <thead>
            <tr className="text-indigo-600 h-10 ">
              <th className="text-center">Client</th>
              <th>Document</th>
              <th>Pages Number</th>
              <th>Printing</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody className="bg-white my-2">
            {docs !== undefined && !isLoading ? (
              filtered !== null ? (
                filtered.map((doc) => <DocItem doc={doc} key={doc._id} />)
              ) : (
                docs.map((doc) => <DocItem doc={doc} key={doc._id} />)
              )
            ) : (
              <tr>
                <td colSpan="4">
                  <Spinner />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Queue;
