import { NavLink, Outlet } from "react-router-dom"

export const MobileLayout: React.FC = () => {

    return (
        <>
            <nav>
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
        </>
    )


}