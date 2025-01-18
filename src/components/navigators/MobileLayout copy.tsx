import { NavLink, Outlet } from "react-router-dom"

export const MobileLayout: React.FC = () => {

    return (
        <div className="flex flex-col bg-slate-300 text-red-900 p-4">
            <nav className=" bg-slate-500 text-red-400 p-4">
                
                    
                        <NavLink to="/">Project Details</NavLink>
                  
                        <NavLink to="/front-compute">Front Compute</NavLink>
                    
                        <NavLink to="/back-compute">Back Compute</NavLink>
                   
                
            </nav>
            <Outlet></Outlet>
        </div>
    )


}