import { BlueCard } from "../ui/card";
import { Chart } from "../ui/dashboard/chart";
import FullCard from "../ui/dashboard/fullCard";
import FullChart from "../ui/dashboard/fullChart";
import FullPieChart from "../ui/dashboard/fullPieChart";
import QuickTransfer from "../ui/dashboard/quickTransfer";
import { Transactions } from "../ui/dashboard/transactions";
import { LightCard } from "../ui/lightcard";

export default function Dashboard(){
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-10">
                <FullCard/>
                <FullChart/>
                <QuickTransfer/>

            </div>
            <div className="flex flex-col gap-5">
                <Transactions/>
                <FullPieChart/>
            </div>
        </div>
    )
}