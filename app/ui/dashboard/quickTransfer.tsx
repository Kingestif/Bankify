export default function QuickTransfer() {
    type Transfers = {
        imageUrl:string,
        name:string,
        role:string
    }

    const TransferData:Transfers[] = [
        {
            imageUrl: "/pfp3.png",
            name: "Rahmina Press",
            role: "Director"
        },
        {
            imageUrl: "/pfp1.jpeg",
            name: "Oliver Bator",
            role: "CEO"
        },

        {
            imageUrl: "/pfp4.jpeg",
            name: "Berni Berbatov",
            role: "Designer"
        }

    ]
    
    return (
        <div className="flex flex-col gap-4 w-fit dark:text-white">
            <div className="font-medium text-xl">Quick Transfer</div>
            <div className="bg-white p-7 rounded-2xl  flex flex-col gap-5 dark:bg-black">
                <div className="flex gap-5">
                    {TransferData.map(people=>(
                        <div key={people.name} className="flex flex-col items-center gap-">
                            <div className="w-13 h-13 rounded-full overflow-hidden">
                                <img src={people.imageUrl} className="object-cover" alt="Reciepient image" />
                            </div>
                            <div className="text-sm flex flex-col items-center">
                                <div className="font-semibold">{people.name}</div>
                                <div className="text-gray-400">{people.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-5 ">
                    <div className="text-gray-600 dark:text-gray-300">Write amount</div>
                    <div className="flex gap-1">
                        <input className="bg-gray-200 w-20 rounded-lg px-1 text-sm  focus:outline-none dark:bg-gray-800" placeholder="$530" type="text" />
                        <button className="bg-blue-600 text-white rounded-full px-2 text-sm">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}