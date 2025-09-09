"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from "react-chartjs-2"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function DebitOverview() {
  return (
    <div className='w-150 h-80'>
        <Bar
            data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        label: "Debit",
                        data: [300,400,300,300,400,400,100],
                        backgroundColor: "#1814F3",
                        borderRadius:100,
                        barThickness:20
                    },
                    {
                        label: "Credit",
                        data: [200,300,400,500,400,300,200],
                        borderRadius:100,
                        barThickness:20,
                        backgroundColor: '#E9B872'
                    },
                ]
            }}  
        />

    </div>
  )
}
