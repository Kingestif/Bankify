"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie, Line, Doughnut } from "react-chartjs-2"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export function PieChart() {
  return (
    <div >
        <Doughnut
            data={{
                labels: ["Transfer", "Shopping", "Service"],
                datasets: [
                    {
                        label: "Diposit",
                        data: [200,400,300],
                        backgroundColor: ["#1814F3", "#7ae7c7", "#fbbf24"],
                        borderColor:["#1814F3", "#7ae7c7", "#fbbf24"],
                    },
                ]
            }}  
        />

    </div>
  )
}
