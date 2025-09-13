import { InvestmentData } from "@/app/lib/placeholders-data";
import { Chart } from "@/app/ui/dashboard/chart";
import { LineChart } from "@/app/ui/investments/lineChart";
import MyInvestment from "@/app/ui/investments/myIvestment";
import TrendingStock from "@/app/ui/investments/trendingStock";

export default function page() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 w-full justify-between">
        {InvestmentData.map(items=>(
            <div key={items.name} className="flex items-center gap-10 bg-white px-20 py-5 rounded-2xl dark:bg-gray-800 dark:text-white">
                <img src={items.imageUrl} alt="" />
                <div>
                    <div className="text-gray-500">{items.name}</div>
                    <div className="text-2xl font-bold">{items.balance}</div>
                </div>
            </div>
        ))}
      </div>

      <div className="flex justify-between">
        <LineChart/>
        <Chart/>
      </div>

      <div className="flex gap-50">
        <MyInvestment/>
        <TrendingStock/>
      </div>
    </div>

  )
}