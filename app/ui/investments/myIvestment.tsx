import { MyIvestmentData } from "@/app/lib/placeholders-data";

export default function MyInvestment() {
  return (
    <div className="w-1/2 flex flex-col gap-2">
        <div className="font-bold text-xl">My Investment</div>
        <div className="flex flex-col gap-3">
            {
                MyIvestmentData.map((item,idx)=>(
                    <div key={item.name} className="flex bg-white p-4 rounded-2xl items-center justify-between">
                        <div className="flex gap-5">
                            <div className="w-13 h-13 rounded-xl">
                                <img src={item.icon} alt="" />
                            </div>
                            <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-gray-500 text-sm">{item.type}</div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">{item.value}</div>
                            <div className="text-gray-500 text-sm">Investment Value</div>
                        </div>
                        <div>
                            <div className={`${idx%2===0? "text-green-600": "text-red-600"} font-semibold`}>{item.percentage}</div>
                            <div className="text-gray-500 text-sm">Return Value</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
