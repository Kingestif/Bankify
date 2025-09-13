"use client"
import { Chart as ChartJS, LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2"
ChartJS.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend);

export function LineChart() {
  return (
    <div className='flex flex-col gap-2 dark:text-white'>
        <div className='text-xl font-semibold'>Yearly Total Investment</div>
        <div className='w-150 h-80 bg-white dark:bg-gray-800 p-1 rounded-2xl'>
            <Line
                data={{
                    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                    datasets: [
                        {
                            label: "Investments",
                            data: [200,400,300,290,500,600,330],
                            // backgroundColor: "#E98A15",
                            borderColor: "#1814F3",
                            tension: 0,
                            pointRadius:8,
                            pointHoverRadius:9,
                            pointBorderWidth:3,
                            pointBorderColor:"#1814F3",
                            pointBackgroundColor:"#fff"
                        },
                    ]
                }}  
            />
        </div>
    </div>
  )
}

export function CurvedLineChart() {
  return (
    <div className='flex flex-col gap-2 dark:text-white'>
        <div className='text-xl font-semibold'>Monthly Revenue</div>
        <div className='w-150 h-80 bg-white p-1 rounded-2xl dark:bg-gray-800'>
            <Line
                data={{
                    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [240,200,130,320,270,400,400],
                            borderColor: "#12DAC3",
                            tension: 0.4                                                                        
                        },
                    ]
                }}  
            />
        </div>
    </div>
  )
}
