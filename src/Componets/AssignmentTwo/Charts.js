import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const LineChartWithLabel = ({dataLabel,ChartData}) => {
    console.log(ChartData);
    const options = {
       responsive: true,
       plugins: {
         legend: {
        //   position: 'top',
         },
         title: {
           display: true,
           text: "title",
         },
       },
     };
   
     const newArray =  Array.from(Array(10).keys())
     const labels = dataLabel;
   
      const data = {
       labels,
       datasets: [
         {
           label: "dataSetlabel",
           data:ChartData,
           borderColor: '#4c5050',
           borderWidth:1,
           backgroundColor: '#00000055',
           fill:true,
           pointBorderWidth:1,pointRadius:1
         }
       ],
     };


   return (
       <Bar options={options} data={data} />
   )
 }

 export default LineChartWithLabel