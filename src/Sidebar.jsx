//==-!!!!!! JUST FOR INFO !!!!!!====
//There's a NavLink component in react-router that will automatically add "actve class if that link is currently active" 
//Saves some biolerplate code.
//It's the easier method to use 

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Sidebar = () => {

    return (

    <aside className="sidebar bg-[#fff] h-[100vh] w-[17vw] shadow-2xl flex-1 flex flex-col justify-between p-4">

            <div className="top flex items-center">
                <div className="logo">
                    <Link to="/">
                        <h1 className="text-3xl font-extrabold font-montserrat text-primary">NYUNGURA</h1>
                    </Link>
                </div>
                <div className="close hidden m-auto text-lg" id="close-btn">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>

            <div className="dashboard-items flex flex-col justify-between gap-4 mt-12 ">  
                <CustomLink to="/dashboard" className="nav-item">
                    <i className="fa-regular fa-objects-column text-lg"></i>
                    <h4 className="text-base font-medium">Dashboard</h4>
                </CustomLink>

                <CustomLink to="/payments" className="nav-item">
                    <i className="fa-regular fa-credit-card text-lg"></i>
                    <h4 className="text-base font-medium">Payments</h4>
                </CustomLink>

                <CustomLink to="/loans" className="nav-item">
                    <i className="fa-light fa-hand-holding-dollar text-lg"></i>
                    <h4 className="text-base font-medium">Loans</h4>
                </CustomLink>
                
                <CustomLink to="/profile" className="nav-item">
                    <i className="fa-regular fa-user text-lg"></i>
                    <h4 className="text-base font-medium">Profile</h4>
                </CustomLink>

                <CustomLink to="/notifications" className="nav-item">
                    <i class="fa-regular fa-bell text-lg"></i>
                    <h4 className="text-base font-medium">Notifications</h4>
                </CustomLink>
                
                <CustomLink to="/settings" className="nav-item">
                    <i className="fa-regular fa-gear text-lg"></i>
                    <h4 className="text-base font-medium">Settings</h4>
                </CustomLink>
            </div>

            <div className="logout mt-[80%] ml-8">
                <Link to="#" className="flex items-center gap-4 h-12 font-bold text-[#18171f]">
                    <i className="fa-regular fa-arrow-right-from-bracket text-lg"></i>
                    <h4>Logout</h4>
                </Link>
            </div>
            
    </aside>

  )
}

export default Sidebar

function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <Link to={to} {...props} className={ isActive ? "active nav-item" : "nav-item"}>
            {children}
        </Link>
    );
}


