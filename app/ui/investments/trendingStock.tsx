import { TrendingData } from "@/app/lib/placeholders-data"

export default function TrendingStock() {
  return (
    <div className="flex flex-col grow gap-2 dark:text-white">
        <div className="font-semibold text-xl">Trending Stock</div>
        <table className="w-full bg-white rounded-2xl dark:bg-gray-700">
            <thead>
                <tr className="TrendingStock text-lg  text-gray-500 ">
                    <th>SL No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Return</th>
                </tr>
            </thead>
            <tbody>
                {TrendingData.map((item,idx)=>(
                    <tr key={item.name} className="text-center">
                        <td className="p-2">{item.number}</td>
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">{item.price}</td>
                        <td className={`${idx%2===0? "text-green-600" : "text-red-600"} p-2`}>{item.return}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}