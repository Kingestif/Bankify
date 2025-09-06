export function BlueCard(){
    return (
        <div className="flex gap-8 flex-col bg-primary text-white w-90 rounded-3xl p-5">
            <div className="row1 flex gap-2 justify-between">
                <div>
                    <div>Balance</div>
                    <div className="font-bold text-lg">$5,3453</div>
                </div>
                <img src="/Chip_Card.svg" className="w-10 h-10" alt="" />
            </div>
            <div className="row2 flex gap-2 justify-between">
                <div>
                    <div className="text-sm">CARD HOLDER</div>
                    <div className="font-bold text-lg">Steven zinex</div>
                </div>
                <div>
                    <div className="text-sm">VALID THRU</div>
                    <div className="font-bold text-lg">12/22</div>
                </div>
            </div>
            <div className="row3 flex gap-2 justify-between">
                <div className="font-bold text-lg">5426 **** **** 3252</div>
                <img src="/union.svg" className="w-10 h-10" alt="union icon"/>
            </div>
        </div>
    )
}