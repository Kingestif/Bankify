import ActiveLoans from "@/app/ui/loans/activeLoans";
import Header from "@/app/ui/loans/header";

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <Header/>
      <ActiveLoans/>
    </div>
  )
}
