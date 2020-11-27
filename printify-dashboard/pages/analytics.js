import Head from "next/head"
import { Line ,Doughnut} from "react-chartjs-2";
import Layout from "../components/Layout"; 

const Analytics = () => {
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June',"July",'August',"September","October","November","December"],
    datasets: [
      {
        label: 'Monthly Income',
        data: [467000, 477000, 423000, 426000, 434000, 360000,46700, 477000, 423000, 426000, 434000, 360000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          
        ],
        borderWidth: 2,
        fill:false
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
  return <Layout>
     <Head>
       <title>Analytics</title>
      </Head>
      <div className="p-4 grid grid-cols-6 gap-4 h-full  md:grid-rows-5 ">
       
      <div className="col-span-6  justify-self-stretch  flex items-center flex-col md:col-span-2"><h1 className="text-4xl font-bold">222<span className="text-3xl">k</span></h1><h3 className="text-gray-600">Total Revenue</h3></div>
      
      <div className="col-span-6  justify-self-stretch flex items-center flex-col md:col-span-2" ><h1 className="text-4xl font-bold">+ 12<span className="text-3xl">%</span></h1><h3 className="text-gray-600">Profit</h3></div>
      <div className="col-span-6  justify-self-stretch flex items-center flex-col md:col-span-2"><h1 className="text-4xl font-bold">10<span className="text-3xl">k</span></h1><h3 className="text-gray-600">Total documents</h3></div>
      <div className="col-span-6  justify-self-stretch self-stretch row-span-2 ">
      <Line data={data1} options={options1} />
      </div>
      <div className="  col-span-6 justify-self-stretch md:col-start-2 md:col-end-4 md:row-span-2 md:mb-4 self-stretch "><Doughnut data={data2} options={options2} /></div>
      <div className=" mb-20 col-span-6 justify-self-stretch md:col-start-4 md:col-end-6 md:row-span-2  md:mb-4 self-stretch  "><Doughnut data={data2} options={options2} /></div>
      
      </div>
    </Layout>;
};

Analytics.propTypes = {};

export default Analytics;
