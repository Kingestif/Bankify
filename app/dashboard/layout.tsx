import { NavBar } from "../ui/navBar";

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <NavBar name={"Overview"}/>
        <div>{children}</div>
    </div>
  )
}