import { CardListData } from "@/app/lib/placeholders-data";

export default function CardsList() {
  return (
    <div className="flex flex-col gap-10">
        {CardListData.map((item,idx)=>(
            <div key={item.icon} className="flex bg-white p-4 rounded-2xl items-center justify-between dark:bg-gray-800">
                <div className="flex gap-5">
                    <div className="w-13 h-13 rounded-xl">
                        <img src={item.icon} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">Card Type</div>
                        <div className="text-gray-500 text-sm">Secondary</div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold">Bank</div>
                    <div className="text-gray-500 text-sm">DBL Bank</div>
                </div>
                <div>
                    <div className="font-semibold">Card Number</div>
                    <div className="text-gray-500 text-sm">*** **** 325</div>
                </div>
                <div>
                    <div className="font-semibold">Namain Card</div>
                    <div className="text-gray-500 text-sm">Michel</div>
                </div>
                <div className="text-blue-600 font-semibold">View Details</div>
            </div>))}
    </div>
  )
}
