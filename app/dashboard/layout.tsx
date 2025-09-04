import { SideBar } from "../ui/dashboard/sideBar";
import { NavBar } from "../ui/navBar";

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex bg">
        <SideBar/>
        <div className="flex-grow">
          <NavBar name={"Overview"}/>
          <div className="bg-gray-100 px-10 h-screen">{children}</div>   
        </div> 
    </div>
  )
}