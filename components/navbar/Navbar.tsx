import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components/active-link/ActiveLink";


const navitems=[
  {path:'/about', text:'About'},
  {path:'/contact', text:'Contact'},
  {path:'/pricing', text:'Pricing'}
]
export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded ">
      <Link href="/" className="flex flex-row gap-2 items-center">
      <HomeIcon/>
        <span>Home</span>
      </Link>
      <div className="flex flex-row gap-4">
        {
          navitems.map((item)=>(
            <ActiveLink key={item.path} {...item} />
          ))
        }
      </div>
    </nav>
  );
};
