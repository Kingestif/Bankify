import { SideBar } from "../ui/dashboard/sideBar";
import { NavBar } from "../ui/navBar";

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex bg">
        <SideBar/>
        <div className="flex-grow">
          <NavBar name={"Overview"}/>
          <div className="px-10">{children}</div>
        </div>
    </div>
  )
}