export default function FormPage() {
  return (
    <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">Add New Card</div>
        <div className="flex flex-col gap-5 bg-white dark:bg-gray-800  p-4 rounded-2xl">
            <div className="w-150 text-gray-500 font-light text-xl">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</div>
            <form action="none" className="flex flex-col gap-5">
              <div className="Form flex gap-3">
                <label className="">
                  <div className="text-xl">Card Type</div>
                  <input className="border-1 rounded-xl p-2 border-gray-400 focus:outline-none "  placeholder="Classic" type="text" />
                </label>
                <label>
                  <div className="text-xl">Name on Card</div>
                  <input className="border-1 rounded-xl p-2 border-gray-400 focus:outline-none" placeholder="My Cards" type="text" />
                </label>
              </div>
              <div className="Form flex gap-3">
                <label>
                  <div className="text-xl">Balance</div>
                  <input className="border-1 rounded-xl p-2 border-gray-400 focus:outline-none" placeholder="27,000$" type="text" />
                </label>
                <label>
                  <div className="text-xl">Expiration Date </div>
                  <input className="border-1 rounded-xl p-2 border-gray-400 focus:outline-none" placeholder="25 January 2025" type="text" />
                </label>
              </div>
              <button type="button" className="bg-primary text-white text-lg px-6 py-2 w-fit rounded-xl focus:outline-2 focus:outline-cyan-700">Add Card</button>
            </form>
        </div>
    </div>
  )
}
