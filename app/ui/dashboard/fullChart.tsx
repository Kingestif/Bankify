import { Chart } from "./chart";

export default function FullChart() {
  return (
    <div className="flex flex-col gap-2 bg-white w-fit h-fit px-10 rounded-2xl dark:bg-gray-800 dark:text-white">
        <div className="text-xl font-medium">Weekly Activity</div>
        <Chart/>
    </div>
  )
}
