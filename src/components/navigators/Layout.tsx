import { NavLink, Outlet } from "react-router-dom"
import { MobileLayout } from "./MobileLayout";

export const Layout: React.FC = () => {

    const windowlWith = window.innerWidth;


    return (
         windowlWith < 600 ? <MobileLayout />
            :
            <div className="flex flex-row bg-slate-300 text-red-900 p-4">
            <nav className=" bg-slate-500 text-red-400 p-4">
                <ul>
                    <li>
                        <NavLink to="/">Project Details</NavLink>
                    </li>
                    <li>
                        <NavLink to="/front-compute">Front Compute</NavLink>
                    </li>
                    <li>
                        <NavLink to="/back-compute">Back Compute</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
        
    )


}