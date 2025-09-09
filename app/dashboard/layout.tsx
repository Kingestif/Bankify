"use client"
import { SideBar } from "../ui/dashboard/sideBar";
import { NavBar } from "../ui/navBar";
import { usePathname } from "next/navigation";

/**
 * * "usePathname" requires "use client" used here to dynamically get the path user currently is
 * ? min-h-screen on the parent div & flex-grow on the children might be Potential issue but works for now
 */
export default function Layout({children}:{children: React.ReactNode}) {
  const pathname = usePathname();
  const pathSegment = pathname.split('/').filter(segment => segment !== '');
  const lastSegment = pathSegment.pop() ?? "";
  const capitalize = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  
  return (
    <div className="flex bg min-h-screen">
        <SideBar/>
        <div className="flex flex-col flex-grow min-h-screen">
          <NavBar name={capitalize}/>
          <div className="bg-gray-100 px-20 py-5  dark:bg-gray-900 flex-grow">{children}</div>   
        </div> 
    </div>
  )
}