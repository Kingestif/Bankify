import { accountsData, InvoicesData, LastTransactionData } from "@/app/lib/placeholders-data"
import { DebitOverview } from "@/app/ui/accounts/debitOverview"
import { FullLightBlueCard } from "@/app/ui/accounts/fullLightBlueCard"

export default function page(){
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 w-full justify-between">
                {accountsData.map(items=>(
                    <div key={items.name} className="flex items-center gap-10 bg-white px-10 py-5 rounded-2xl dark:bg-gray-800 dark:text-white">
                        <img src={items.imageUrl} alt="" />
                        <div>
                            <div className="text-gray-500">{items.name}</div>
                            <div className="text-2xl font-bold">{items.balance}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between dark:text-white">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold">Last Transactions</div>
                        <div className="flex flex-col w-fit bg-white rounded-2xl dark:bg-gray-800 dark:text-white p-2">
                            {LastTransactionData.map((items,idx)=>(
                                <div key={items.name} className="flex gap-10 items-center text-lg p-2">
                                    <img className="w-15 h-15" src={items.imageUrl} alt="" />
                                    <div>
                                        <div>{items.name}</div>
                                        <div className="text-gray-500">{items.date}</div>
                                    </div>
                                    <div className="text-gray-500">{items.type}</div>
                                    <div className="text-gray-500">{items.cardNumber}</div>
                                    <div className="text-gray-500">{items.status}</div>
                                    <div className={`${idx!==2? "text-red-600": "text-green-600"}`}>{items.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-xl">Debit & Credit Overview</div>
                        <div className="w-fit bg-white rounded-2xl p-5 dark:bg-gray-800">
                            <DebitOverview/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <FullLightBlueCard/>
                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold">Invoices Sent</div>
                        <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl dark:bg-gray-800">
                            {InvoicesData.map(items=>(
                                <div key={items.name} className="flex items-center justify-between ">
                                    <div className="flex gap-5 items-center ">
                                        <img src={items.imageUrl} alt="" />
                                        <div>
                                            <div>{items.name}</div>
                                            <div className="text-gray-500">{items.time}</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-500">{items.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}