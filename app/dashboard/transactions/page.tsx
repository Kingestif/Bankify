import FullCard from "@/app/ui/dashboard/fullCard";
import RecentTransactions from "@/app/ui/transactions/recentTransactions";
import { TransactionChart } from "@/app/ui/transactions/transactionChart";

export default function page() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex">
        <FullCard/>
        <TransactionChart/>
      </div>
      <RecentTransactions/>
    </div>
  )
}