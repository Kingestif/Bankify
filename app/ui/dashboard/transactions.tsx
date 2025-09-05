export function Transactions() {
  return (
    <div className="flex flex-col gap-5">
        <div className="text-xl font-medium">Recent Transactions</div>
        <div className="flex flex-col gap-5 bg-white rounded-2xl p-5">
            <div className="flex gap-5">
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-amber-200  flex justify-center items-center rounded-full"><img src="/Transaction1.svg" alt="" /></div>
                    <div>
                        <div>Deposity from my Card</div>
                        <div className="text-gray-500">28 January 2021</div>
                    </div>
                </div>
                <div className="text-red-500">-$850</div>
            </div>

            <div className="flex gap-5">
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-200  flex justify-center items-center rounded-full"><img src="/Tranaction2.svg" alt="" /></div>
                    <div>
                        <div>Deposity Paypal</div>
                        <div className="text-gray-500">25 January 2021</div>
                    </div>
                </div>
                <div className="text-green-500">+$2,500</div>
            </div>

            <div className="flex gap-5">
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-cyan-200  flex justify-center items-center rounded-full"><img src="/Transaction3.svg" alt="" /></div>
                    <div>
                        <div>Jemi Wilson</div>
                        <div className="text-gray-500">25 January 2021</div>
                    </div>
                </div>
                <div className="text-green-500">+$5,760</div>
            </div>
        </div>

    </div>

  )
}
