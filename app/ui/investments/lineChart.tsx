"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from "react-chartjs-2"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function LineChart() {
  return (
    <div className='w-150 h-80'>
        <Line
            data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        label: "Diposit",
                        data: [200,400,300,290,500,600,330],
                        backgroundColor: "#1814F3",
                    },
                    {
                        label: "Withdrawal",
                        data: [300,600,500,250,300,400,200],
                        backgroundColor: '#7ae7c7'
                    },
                ]
            }}  
        />
    </div>
  )
}
