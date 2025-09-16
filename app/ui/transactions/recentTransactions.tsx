import { TransactionData } from "@/app/lib/placeholders-data";

export default function RecentTransactions() {
    return (
        <div className="flex flex-col gap-5 dark:text-white">
            <div className="text-xl font-semibold">Recent Transactions</div>
            <div className="flex gap-10 text-lg text-gray-500 hover:">
                <div className="text-primary/80 font-medium underline underline-offset-8 decoration-2 dark:text-blue-600">All Transactions</div>
                <div>Income</div>
                <div>Expense</div>
            </div>

            <table className="TransactionTable w-full">
                <thead>
                    <tr>
                        <th className="Table-heading">Description</th>
                        <th className="Table-heading">Transaction ID</th>
                        <th className="Table-heading">Type</th>
                        <th className="Table-heading">Card</th>
                        <th className="Table-heading">Date</th>
                        <th className="Table-heading">Amount</th>
                        <th className="Table-heading">Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {TransactionData.map((item,idx)=>(
                            <tr key={item.description}>
                                <td className="Table-Datas">{item.description}</td>
                                <td className="Table-Datas">{item.transactionId}</td>
                                <td className="Table-Datas">{item.type}</td>
                                <td className="Table-Datas">{item.card}</td>
                                <td className="Table-Datas">{item.date}</td>
                                <td className={`Table-Datas ${idx%2 !== 0? "text-green-600": "text-red-600"}`}>{item.amount}</td>
                                <td className="Table-Datas"><div className="border-1 border-gray-600 w-fit rounded-full px-2 py-1">Download</div></td>
                            </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex font-medium gap-5 items-center justify-end">
                <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600" fill="blue" viewBox="0 0 640 640"><path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/></svg>
                    </div>
                    <div className="text-primary dark:text-blue-600">Previous</div>
                </div>
                <div className="bg-blue-600 px-2 py-1 text-white rounded-lg">1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div className="flex items-center gap-3">
                    <div className="text-primary dark:text-blue-600">Next</div>
                    <div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600" fill="blue" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg></div>
                </div>
            </div>
        </div>
    )
}
