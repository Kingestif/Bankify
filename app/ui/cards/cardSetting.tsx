import { CardSettingData } from "@/app/lib/placeholders-data";

export default function CardSetting() {
  return (
    <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">Card Setting</div>
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-2">
            {CardSettingData.map((item,idx)=>(
                <div key={item.icon} className="flex flex-col p-4 rounded-2xl items-center justify-between">
                    <div className="flex gap-5">
                        <div className="w-13 h-13 rounded-xl">
                            <img src={item.icon} alt="" />
                        </div>
                        <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-gray-500 text-sm">{item.option}</div>
                        </div>
                    </div>
            </div>))}
        </div>
    </div>
  )
}
