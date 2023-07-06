import { Fragment } from "react";
import { Link } from "react-router-dom";

import { BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { CiBurger } from 'react-icons/ci';
import { BiFoodMenu } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { VscSignOut } from 'react-icons/vsc';

const Sidebar = () => {

    const links = [
        { text: "Dashboard", to: "/dashboard", icon: AiOutlineDashboard },
        { text: "Category", to: "/category", icon: BiCategoryAlt },
        { text: "Recipes", to: "/recipes", icon: CiBurger },
        { text: "Ingredient", to: "/ingredient", icon: BiFoodMenu },
        { text: "Users", to: "/users", icon: FiUsers },
        { text: "Sign Out", to: "/", icon: VscSignOut }
    ];


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
                                to={link.to}
                            >
                                <span className="flex items-center gap-4"><Icon />{link.text}</span>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </Fragment>
    )
}

export default Sidebar;
