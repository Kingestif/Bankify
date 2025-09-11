import { InvestmentData } from "@/app/lib/placeholders-data";
import { Chart } from "@/app/ui/dashboard/chart";

export default function page() {
  return (
    <div>
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

      <Chart/>
    </div>

  )
}