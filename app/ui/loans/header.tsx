import { LoansData } from "@/app/lib/placeholders-data";

export default function Header() {
  return (
    <div className="flex justify-between dark:text-white">
        {LoansData.map(items=>(
            <div key={items.name} className="flex gap-3 items-center text-lg bg-white dark:bg-gray-800 p-5 rounded-2xl">
                <img src={items.imageUrl} alt="" />
                <div>
                    <div>{items.name}</div>
                    <div className="font-semibold">{items.balance}</div>
                </div>
            </div>
        ))}
    </div>
  )
}