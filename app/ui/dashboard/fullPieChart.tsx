import { PieChart } from "./pieChart";

export default function FullPieChart() {
  return (
    <div className="flex flex-col gap-2  w-fit h-fit ">
        <div className="text-xl font-medium">Expense Statistics</div>
        <div className="bg-white rounded-2xl dark:bg-gray-800 dark:text-white px-10">
            <PieChart/>
        </div>
    </div>
  )
}