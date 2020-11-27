import Head from "next/head";
import { Bar,Doughnut } from "react-chartjs-2";
import Link from 'next/link';


import Layout from "../components/Layout";

const Index = () => {
  const data1 = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Number of printed documents',
        data: [467, 477, 423, 426, 434, 360],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  const options1 = {
   maintainAspectRatio:false,
    responsive:true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    }
  }
  const data2 = {
    labels: ['Printed', 'Printed And Delivered'],
    datasets: [
      {
        label: '# of Votes',
        data: [251, 456],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  }
  const options2 = {
    maintainAspectRatio:false,
     responsive:true
   }
  return (
    <Layout>
      <Head>
        <title>Printify</title>
      </Head>
      <div className="p-6 grid grid-cols-3 gap-6 md:grid-rows-5">
        <div className="col-span-3 md:row-span-2 flex bg-indigo-600 bg-opacity-50 rounded-lg pt-2 justify-around items-center ">
          <div className="w-2/4">
            <h1 className="font-bold text-xl text-white">Hello !</h1>
            <p className="text-white md:text-xs">
              You have 10 documents waiting to be printed and 5 waiting to be
              delivered.{" "}
            </p>
          </div>
          <div className="w-1/4 ">
            <img src="/images/folder_files.svg" alt="" />
          </div>
        </div>
       
          <div className="col-span-3 rounded-lg mr-6 md:col-span-2 justify-self-stretch md:row-span-2">
            <Bar data={data1} options={options1}  className=""/>
          </div>
          <div className="col-span-3 md:col-span-1  rounded-lg md:row-span-2"><Doughnut data={data2} options={options2} /></div>
       
        
          <div className="invisible md:visible text-white flex flex-row bg-indigo-800  rounded-lg  flex-grow mr-4 justify-between px-8 items-center ">
            <h1 className="text-xl ">Queue</h1>
            <Link href="queue"><a><i className="fas fa-arrow-right text-xl font-extrabold hover:text-yellow-200"></i></a></Link>
          </div>
          <div className="invisible md:visible text-white flex flex-row bg-indigo-600  rounded-lg flex-grow mr-4 justify-between px-8 items-center">
          <h1 className="text-xl ">Analytics</h1>
          <Link href="analytics"><a><i className="fas fa-arrow-right text-xl font-extrabold hover:text-yellow-200"></i></a></Link>
          </div>
          <div className="invisible md:visible text-white flex flex-row bg-indigo-400  rounded-lg flex-grow justify-between px-8 items-center">
          <h1 className="text-xl ">Setting</h1>
          <Link href="setting"><a><i className="fas fa-arrow-right text-xl font-extrabold hover:text-yellow-200"></i></a></Link>
          </div>
       
      </div>
    </Layout>
  );
};

export default Index;
