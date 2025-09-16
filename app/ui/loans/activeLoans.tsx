import { loans } from "@/app/lib/placeholders-data";

export default function ActiveLoans() {
  return (
    <div className="flex flex-col gap-3 dark:text-white">
        <div className="text-xl font-semibold">Active Loans Overview</div>
        <table className=" w-full text-center bg-white dark:bg-gray-800  rounded-3xl ">
            <thead>
                <tr className="ActiveLoans text-gray-600 dark:text-gray-400 ">
                    <th>SL No</th>
                    <th>Loan Money</th>
                    <th>Left to repay</th>
                    <th>Duration</th>
                    <th>Interest rate</th>
                    <th>Installent</th>
                    <th>Repay</th>
                </tr>
            </thead>

            <tbody>
                {loans.map((item,idx)=>(
                    <tr key={item.id} className={`LoanBody ${idx === loans.length - 1? "text-red-600":"text-black"} dark:text-white`}>
                        <td>{item.id}</td>
                        <td>{item.loanMoney}</td>
                        <td>{item.leftToRepay}</td>
                        <td>{item.durationMonths}</td>
                        <td>{item.interestRate}</td>
                        <td>{item.installmentPerMonth}</td>
                        <td className="flex justify-center"><div className="border-1 w-fit py-1 px-3 rounded-full">Repay</div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}