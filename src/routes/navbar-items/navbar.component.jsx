import { Fragment } from "react";
import { Link } from "react-router-dom";

import { BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { CiBurger } from 'react-icons/ci';
import { BiFoodMenu } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { VscSignOut } from 'react-icons/vsc';

const NavbarItems = () => {

    const links = [
        { text: "Dashboard", to: "/dashboard", icon: AiOutlineDashboard },
        { text: "Category", to: "/category", icon: BiCategoryAlt },
        { text: "Recipes", to: "/recipes", icon: CiBurger },
        { text: "Ingredient", to: "/ingredient", icon: BiFoodMenu },
        { text: "Users", to: "/users", icon: FiUsers },
        { text: "Sign Out", to: "/", icon: VscSignOut }
    ];


    // const handleClick = (clickedLink) => {
    //     setLinks(links.map((link) => ({ ...link, active: clickedLink === link })));
    // };

    return (
        <Fragment>
            <div className="w-64 p-14">
                <div className="flex justify-start items-center font-extrabold text-2xl pb-20 px-4">
                    <Link to='/'>FoodTime<span className="text-amber-400">.</span></Link>
                </div>
                {links.map((link, index) => {
                    const Icon = link.icon;

                    return (
                        <div key={index} className="flex flex-col sm:flex">
                            <Link className="text-gray-500 focus:text-white inline-flex items-center py-2 px-4 text-sm font-medium mb-9 focus:bg-amber-500 rounded"
                                // onClick={() => handleClick(link)}
                                to={link.to}
                            >
                                <span className="flex items-center gap-4"><Icon />{link.text}</span>
                            </Link>
                        </div>
                    )
                })
                }
            </div>



            {/* <div className="w-80 p-14">
                <div className="flex justify-center items-center font-extrabold text-2xl pb-20">
                    <Link to='/'>Logo<span className="text-amber-400">.</span></Link>
                </div>
                <div className="flex flex-col sm:flex space-y-9">
                    <Link to="/dashboardcontent" className="w-full inline-flex py-2 px-4 rounded-md shadow-sm bg-amber-400 text-sm font-medium text-white hover:bg-gray-300 hover:text-black">
                        <span className="flex items-center gap-4"><AiOutlineDashboard />Dashboard</span>
                    </Link>
                    <Link
                        to="/categorycontent"
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium mt-9"
                    >
                        <span className="flex items-center gap-4"><BiCategoryAlt />Category</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><CiBurger />Recipies</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >

                        <span className="flex items-center gap-4"><BiFoodMenu />Ingredients</span>

                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><FiUsers />Users</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><VscSignOut />Sign Out</span>
                    </Link>
                </div>

            </div> */}



            {/* <div className="w-80 p-14">
                <div className="flex justify-center items-center font-extrabold text-2xl pb-20">
                    <Link to='/'>Logo<span className="text-amber-400">.</span></Link>
                </div>
                <div className="flex flex-col sm:flex space-y-9">
                    <Link onClick={handleClick} to="/dashboardcontent" className="w-full inline-flex py-2 px-4 rounded-md shadow-sm bg-amber-400 text-sm font-medium text-white hover:bg-gray-300 hover:text-black">
                        <span className="flex items-center gap-4"><AiOutlineDashboard />Dashboard</span>
                    </Link>
                    <Link
                        to="/categorycontent"
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium mt-9"
                    >
                        <span className="flex items-center gap-4"><BiCategoryAlt />Category</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><CiBurger />Recipies</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >

                        <span className="flex items-center gap-4"><BiFoodMenu />Ingredients</span>

                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><FiUsers />Users</span>
                    </Link>
                    <Link
                        to=""
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center py-2 px-4 border-b-2 text-sm font-medium"
                    >
                        <span className="flex items-center gap-4"><VscSignOut />Sign Out</span>
                    </Link>
                </div>

            </div> */}
            {/* <DashboardContent />
            <CategoriesContent />
            <Outlet /> */}
        </Fragment>
    )
}

export default NavbarItems;
