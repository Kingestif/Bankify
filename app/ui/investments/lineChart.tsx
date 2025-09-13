"use client"
import { Chart as ChartJS, LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2"
ChartJS.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend);

export function LineChart() {
  return (
    <div className='w-150 h-80'>
        <Line
            data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        label: "Investments",
                        data: [200,400,300,290,500,600,330],
                        backgroundColor: "#E98A15",
                        borderColor: "#1814F3",
                        tension: 0,
                        pointRadius:8
                    },
                ]
            }}  
        />
    </div>
  )
}
