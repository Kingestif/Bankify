"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from "react-chartjs-2"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function TransactionChart() {
  return (

    <div className="flex flex-col gap-2  w-fit h-fit px-10 dark:text-white">
        <div className="text-xl font-medium">My Expenses</div>
        <div className='w-130 h-70 bg-white dark:bg-gray-800 p-10 rounded-2xl'>
            <Bar
                data={{
                    labels: ["Jun", "Jul", "Aug", "Sep", "Jan", "Feb"],
                    datasets: [
                        {
                            label: "Expense",
                            data: [200,400,300,290, 350, 200],
                            backgroundColor: ["#cfcbca","#cfcbca","#7ae7c7","#cfcbca", "#cfcbca", "#cfcbca"],
                            borderRadius:100,
                            barThickness:50
                        },
                    ]
                }}  
            />
        </div>
    </div>
  )
}
