import { TransactionData } from "@/app/lib/placeholders-data";

export default function RecentTransactions() {
    return (
        <div>
            <div>Recent Transactions</div>
            <div className="flex gap-10">
                <div>All Transactions</div>
                <div>Income</div>
                <div>Expense</div>
            </div>
            <div className="">
                <div className="flex gap-10">
                    <div>Description</div>
                    <div>Transaction ID</div>
                    <div>Type</div>
                    <div>Card</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Receipt</div>
                </div>
                <div className="flex gap-10">
                    {TransactionData.map(item=>(
                        <div>
                            <div>{item.description}</div>
                            <div>{item.transactionId}</div>
                            <div>{item.type}</div>
                            <div>{item.card}</div>
                            <div>{item.date}</div>
                            <div>{item.amount}</div>
                            <div>Download</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
