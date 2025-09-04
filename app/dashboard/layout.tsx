import { SideBar } from "../ui/dashboard/sideBar";
import { NavBar } from "../ui/navBar";

/**
 * ? min-h-screen on the parent div & flex-grow on the children might be Potential issue but works for now
 */
export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex bg min-h-screen">
        <SideBar/>
        <div className="flex flex-col flex-grow min-h-screen">
          <NavBar name={"Overview"}/>
          <div className="bg-gray-100 px-10  dark:bg-gray-500 flex-grow">{children}</div>   
        </div> 
    </div>
  )
}