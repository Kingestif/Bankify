import { BlueCard } from "../card";
import { LightCard } from "../lightcard";

export default function FullCard() {
  return (
    <div className="flex flex-col w-fit gap-5 dark:text-white">
        <div className="flex justify-between font-medium text-xl">
            <div className="">My Cards</div>
            <div>See All</div>
        </div>
        <div className="flex gap-10">
          <BlueCard/>
          <LightCard/>
        </div>
    </div>
  )
}