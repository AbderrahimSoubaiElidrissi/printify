import Layout from "../components/Layout";
import Head from "next/head";
import { useState } from "react";

const Queue = () => {
  const [orders, setOrders] = useState([
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: true,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: false,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: false,
      deliveryState: true,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: false,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: false,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
    {
      clientName: "Siham Ben Daia",
      document: "Resume.pdf",
      copies: 2,
      date: "18/08/2020",
      printState: true,
      deliveryState: false,
    },
  ]);

  return (
    <Layout>
      <Head>
        <title>Queue</title>
      </Head>
      <section class="container p-4">
        <table class="w-full p-2 text-gray-700 text-center">
          <thead>
            <tr class="text-indigo-600 h-10 ">
              <th class="text-center">Client</th>
              <th>Document</th>
              <th>Copies</th>
              <th>Date</th>
              <th>Printing</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr className=" p-4">
                  <td>{order.clientName}</td>
                  <td>{order.document}</td>
                  <td>{order.copies}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.printState ? (
                      <button className="rounded bg-gray-500 text-white w-24 py-1 text-sm uppercase font-medium tracking-wide outline-none cursor-not-allowed">
                        printed
                      </button>
                    ) : (
                      <button className="rounded bg-indigo-500 text-white w-24 py-1 text-sm  uppercase font-medium tracking-wide outline-none">
                        print
                      </button>
                    )}
                  </td>
                  <td>
                    {order.deliveryState ? (
                      <button className="rounded bg-gray-500 text-white w-24 py-1 uppercase text-sm  font-medium tracking-wide outline-none cursor-not-allowed">
                        Delivered
                      </button>
                    ) : (
                      <button className="rounded bg-green-500 text-white w-24 py-1 uppercase font-medium  text-sm  tracking-wide outline-none">
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Queue;
