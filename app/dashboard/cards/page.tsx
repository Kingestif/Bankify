import { LightBlueCard } from "@/app/ui/accounts/lightBlueCard";
import { BlueCard } from "@/app/ui/card";
import CardSetting from "@/app/ui/cards/cardSetting";
import CardsList from "@/app/ui/cards/cardsList";
import FormPage from "@/app/ui/cards/formPage";
import { PieChart } from "@/app/ui/dashboard/pieChart";
import { LightCard } from "@/app/ui/lightcard";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="text-xl font-semibold">My Cards</div>
        <div className="flex gap-10">
          <LightBlueCard/>
          <BlueCard/>
          <LightCard/>
        </div>
      </div>
      
      <div className="flex gap-20 dark:text-white">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">Card Expense Statistics</div>
          <div className="w-90 h-90">
            <PieChart/>
          </div>
        </div>
        <div className="flex flex-col grow gap-3">
          <div className="text-xl font-semibold">Card List</div>
          <CardsList/>
        </div>
      </div>

      <div className="flex gap-30 dark:text-white">
        <FormPage/>
        <CardSetting/>
      </div>
    </div>
  )
}
