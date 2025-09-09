import { LightBlueCard } from "./lightBlueCard";

export function FullLightBlueCard(){
    return(
        <div className="flex flex-col gap-2">
            <div className="flex justify-between text-lg font-semibold">
                <div>My Card</div>
                <div>See all</div>
            </div>
            <LightBlueCard/>
        </div>
    )
}